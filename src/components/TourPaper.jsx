import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: { fontSize: 11 },
        },
      ],
    },
  },
});
function TourPaper({ imgSrc, altText, name, startingPrice, rating }) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img class='img' src={imgSrc} alt={altText} />{" "}
          <Box padding={1}>
            <Typography variant='subtitle1' component='h2'>
              {name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant='overline'>Starting From</Typography>
              <Typography variant='body2' component='span'>
                ${startingPrice}
              </Typography>
            </Box>
            <Box
              marginTop={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name='read-only'
                  value={rating}
                  readOnly
                  precision={0.5}
                  size='small'
                />
                <Typography
                  sx={{ marginLeft: "4px" }}
                  variant='body2'
                  component={"span"}
                >
                  {rating}
                </Typography>
              </Box>
              <Typography variant='caption' component={"span"}>
                ({Math.floor(Math.random() * 700)}) reviews
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourPaper;

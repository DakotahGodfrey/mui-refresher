import React from "react";
import TourPaper from "./TourPaper";
import { Box, Grid, Typography } from "@mui/material";
import Wildlife from "../images/amanda-frank-nature.jpg";
import Canoe from "../images/david-gomez-canoe-tour.jpg";
import Campground from "../images/mike-erskine-bonfire.jpg";
import Trail from "../images/dylan-mcleod-trail.jpg";

export { Wildlife, Canoe, Campground, Trail };

function AlgonquinTours() {
  return (
    <Box>
      <Typography variant='h1' fontSize={"24px"} gutterBottom component={"h2"}>
        Tours Of Algonquin
      </Typography>
      <Grid container spacing={3}>
        <TourPaper
          imgSrc={Wildlife}
          altText={"Red fox in a snowy clearing surrouned by spruce trees"}
          name='Wildlife of Algonquin Tour'
          startingPrice={"40"}
          rating={5}
        />
        <TourPaper
          imgSrc={Canoe}
          altText={
            "a canoe on a lake during the day with a tree-filled island in the distance"
          }
          name={"Canoe Rentals"}
          startingPrice={"85"}
          rating={4.5}
        />
        <TourPaper
          imgSrc={Trail}
          altText={"close-up of a muddy trail with roots running through it"}
          name='Day Passes'
          startingPrice={"10"}
          rating={3.5}
        />
        <TourPaper
          imgSrc={Campground}
          altText={
            "seven friends sitting around a bonfire in the evening, behind them are spruce trees and green tents"
          }
          name={"Campground Rentals"}
          startingPrice={"75"}
          rating={5}
        />
      </Grid>
    </Box>
  );
}

export default AlgonquinTours;

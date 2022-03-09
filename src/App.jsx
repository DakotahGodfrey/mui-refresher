import { Container } from "@mui/material";
import React from "react";
import "./App.css";
import AlgonquinTours from "./components/AlgonquinTours";

function App() {
  return (
    <div className='app'>
      <Container>
        <AlgonquinTours />
      </Container>
    </div>
  );
}

export default App;

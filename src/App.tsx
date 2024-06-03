import React from "react";
import HorizontalNonLinearStepper from "./components/StepperExample";
import Wizard from "./components/Wizard";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container>
        <Wizard />
      </Container>
    </div>
  );
}

export default App;

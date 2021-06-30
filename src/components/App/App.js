import React from "react";
import Grid from "../Grid";

import {
  GRID_SIZE,
  INITIAL_DIRECTION,
  INITIAL_INSTRUCTIONS,
  INITIAL_POSITION,
} from "../../constants";

function App() {
  return (
    <Grid
      intialPosition={INITIAL_POSITION}
      intialDirection={INITIAL_DIRECTION}
      initialInstructions={INITIAL_INSTRUCTIONS}
      gridSize={GRID_SIZE}
    />
  );
}

export default App;

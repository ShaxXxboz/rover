/**
 * @jest-environment jsdom
 */

import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Grid from "./Grid";
import GridItem from "../GridItem";
import {
  GRID_SIZE,
  INITIAL_DIRECTION,
  INITIAL_INSTRUCTIONS,
  INITIAL_POSITION,
} from "../../constants";

configure({ adapter: new Adapter() });

describe("grid", () => {
  const wrapper = mount(
    <Grid
      intialPosition={INITIAL_POSITION}
      intialDirection={INITIAL_DIRECTION}
      initialInstructions={INITIAL_INSTRUCTIONS}
      gridSize={GRID_SIZE}
    />
  );
  const delayApproximate = INITIAL_INSTRUCTIONS.split("") * 300;

  it("should correctly show final position", () => {
    setTimeout(() => {
      expect(wrapper.find(GridItem).at(32).props().isCurrent).toEqual(true);
    }, delayApproximate);
  });
});

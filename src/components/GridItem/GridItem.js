import React from "react";
import "./GridItem.css";

const GridItem = React.memo(({ x, y, isCurrent }) => (
  <div className={`grid-item ${isCurrent && "current"}`}>
    {x},{y}
  </div>
));

export default GridItem;

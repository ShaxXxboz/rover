import React, {
  useEffect,
  useMemo,
  useState,
  Fragment,
  useCallback,
} from "react";
import { generateGrid, run } from "../../helpers";
import { useInterval } from "../../hooks";
import GridItem from "../GridItem";

const Grid = ({
  intialPosition,
  intialDirection,
  initialInstructions,
  gridSize,
}) => {
  const [position, setPosition] = useState(intialPosition);
  const [direction, setDirection] = useState(intialDirection);
  const [currentInstruction, setCurrentInstruction] = useState(null);

  const instructions = useMemo(
    () => initialInstructions.split(""),
    [initialInstructions]
  );
  const gridArr = useMemo(() => generateGrid(gridSize), [initialInstructions]);

  useInterval(() => {
    if (currentInstruction.key < instructions.length - 1) {
      setCurrentInstruction(({ key }) => ({
        key: key + 1,
        instruction: instructions[key + 1],
      }));
    }
  }, 200);

  useEffect(() => {
    if (currentInstruction) {
      run(
        currentInstruction.instruction,
        direction,
        position,
        setPosition,
        setDirection
      );
    } else {
      setCurrentInstruction({
        key: 0,
        instruction: instructions[0],
      });
    }
  }, [currentInstruction, instructions]);

  const girdItems = useMemo(
    () =>
      gridArr.map(({ x, y }) => {
        const lineBreak = x === gridSize.x - 1 ? <br /> : null;
        const isCurrent = position.x === x && position.y === y;
        return (
          <Fragment key={`${x}${y}`}>
            <GridItem x={x} y={y} isCurrent={isCurrent} />
            {lineBreak}
          </Fragment>
        );
      }),
    [gridArr, position, gridSize]
  );

  return <div>{girdItems}</div>;
};

export default Grid;

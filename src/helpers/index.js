import { EAST, GRID_SIZE, NORTH, SOUTH, WEST } from "../constants";

/**
 * Turns a rover to right
 * @param {string} direction - Current direction
 * @return {string} New direction
 * @function
 */
export const right = (direction) => {
  switch (direction) {
    case NORTH:
      return EAST;
    case EAST:
      return SOUTH;
    case SOUTH:
      return WEST;
    case WEST:
      return NORTH;
    default:
      return direction;
  }
};

/**
 * Turns a rover to left
 * @param {string} direction - Current direction
 * @return {string} New direction
 * @function
 */
export const left = (direction) => {
  switch (direction) {
    case NORTH:
      return WEST;
    case WEST:
      return SOUTH;
    case SOUTH:
      return EAST;
    case EAST:
      return NORTH;
    default:
      return direction;
  }
};

/**
 * Moves a rover forward
 * @param {string} direction - Current direction
 * @param {string} positon - Current position
 * @param {Object} gridSize - Object with grid dimensions
 * @returns {Object} - New position
 * @function
 */
export const forward = (direction, position, gridSize) => {
  switch (direction) {
    case NORTH: {
      if (position.y !== gridSize.y - 1) {
        return { ...position, y: position.y + 1 };
      }
      break;
    }
    case WEST: {
      if (position.x !== gridSize.x - gridSize.x) {
        return { ...position, x: position.x - 1 };
      }
      break;
    }
    case SOUTH: {
      if (position.y !== gridSize.y - gridSize.y) {
        return { ...position, y: position.y - 1 };
      }
      break;
    }
    case EAST: {
      if (position.x !== gridSize.x - 1) {
        return { ...position, x: position.x + 1 };
      }
      break;
    }
    default: {
      return position;
    }
  }
};

/**
 * Generates grid array with given grid size
 * @param {Object} gridSize - Object with grid dimensions
 * @returns {Object[]} - New position
 * @function
 */
export const generateGrid = (gridSize) => {
  let gridArr = [];
  for (let i = gridSize.y - 1; i >= 0; i--) {
    for (let j = 0; j < gridSize.x; j++) {
      gridArr.push({ x: j, y: i });
    }
  }

  return gridArr;
};

/**
 * Runs instruction.
 * @param {string} instruction - Current instruction
 * @param {string} direction - Current direction
 * @param {string} positon - Current position
 * @param {callback} setPosition - Callback for setting position state
 * @param {callback} setDirection - Callback for setting direction state
 * @function
 */
export const run = (
  instruction,
  direction,
  position,
  setPosition,
  setDirection
) => {
  switch (instruction) {
    case "f": {
      setPosition(forward(direction, position, GRID_SIZE));
      break;
    }
    case "r": {
      setDirection(right(direction));
      break;
    }
    case "l": {
      setDirection(left(direction));
      break;
    }
    default: {
      break;
    }
  }
};

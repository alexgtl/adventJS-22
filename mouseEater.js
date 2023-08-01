const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

const MOUSE_CHAR = 'm'
const FOOD_CHAR = '*'
const EMPTY_CHAR = ' '

const AVAILABLE_DIRECTIONS = {
  Up: 'up',
  Left: 'left',
  Down: 'down',
  Right: 'right'
}

function getMousePosition(room) {
  let mouseCurrentPosition, mouseCurrentLine

  room.forEach((line, indexLine) => {
    const currentLine = indexLine
    for (let index = 0; index < line.length; index++) {
      const position = line[index];
      if (position === MOUSE_CHAR) {
        mouseCurrentLine = currentLine
        mouseCurrentPosition = index
      }
    }
  });

  return {
    mouseCurrentLine,
    mouseCurrentPosition
  }
}

function isHorizontalMove(direction) {
  return direction === AVAILABLE_DIRECTIONS.Left || direction === AVAILABLE_DIRECTIONS.Right
}

function canMouseEat(direction, room) {
  const { mouseCurrentPosition, mouseCurrentLine } = getMousePosition(room)

  if (isHorizontalMove(direction)) {
    console.log('se mueve horizontal');
  }

  console.log(mouseCurrentLine, mouseCurrentPosition);
}

canMouseEat(AVAILABLE_DIRECTIONS.Left, room)

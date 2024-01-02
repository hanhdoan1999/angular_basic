//BT4
enum Color {
  RED = 'RED',
  GREEN = 'GREEN',
  BLUE = 'BLUE'
}

const printColor = (color: Color) =>  {
  const colorName = Color[color];
  return colorName
}

console.log(printColor(Color.BLUE))
const input = [
  "5483143223",
  "2745854711",
  "5264556173",
  "6141336146",
  "6357385478",
  "4167524645",
  "2176841721",
  "6882881134",
  "4846848554",
  "5283751526"
]

// conversion of "input" into a two-dimensional matrix of numbers
let matrix = input.map(row => row.split('').map(Number))
let flashes = 0

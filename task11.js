/*------------------------------------------------------------*/
/*-Task 11: How many total flashes are there after 100 steps?-*/
/*------------------------------------------------------------*/

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

const energyLevelUpdate = (i, j, processedValues) => {
  // condition checking whether it is a valid matrix coordinate
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) {
    return
  }

  const key = `${i}:${j}`

  //  condition checking the processing of the value
  if (processedValues.has(key)) {
    return
  }

  // incrementing the value of the matrix
  matrix[i][j]++

  // checking the matrix value if it exceeds the value of 9
  if (matrix[i][j] > 9) {

    // setting the value to 0 when it exceeds the value of 9
    matrix[i][j] = 0
    processedValues.add(key)

    // incrementation of the flash count
    flashes++

    // recursive call for surrounding values
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) continue
        energyLevelUpdate(i + x, j + y, processedValues)
      }
    }
  }
}

const step = () => {
  const processedValues = new Set()

  // iterates through all cells in the matrix and updates their energy level
  matrix.forEach((row, i) =>
    row.forEach((_, j) => energyLevelUpdate(i, j, processedValues))
  )
}

for (let i = 0; i < 100; i++) {
  step()
}

console.log("Number of flashes after 100 steps:", flashes)

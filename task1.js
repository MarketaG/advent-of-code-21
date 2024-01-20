/*--------------------------------------------------------------------------------------------*/
/*-Task 1: How many times will the depth measurement increase compared to the previous value?-*/
/*--------------------------------------------------------------------------------------------*/

let randomArray = []

for (let i = 0; i < 100; i++) {
  // generating random numbers using the 'Math.random()' method
  // appending a random number to the end of an array using the 'push()' method
  let randomNumber = Math.ceil(Math.random() * 200) + 100
  randomArray.push(randomNumber)
}

randomArray.forEach(oneValue => {
  console.log(oneValue)
})

let increaseResult = 0

randomArray.forEach((presentValue, index, array) => {
  // the condition that the checking of array values starts at the second element
  if (index > 0) {
    // assigning the previous value of the array to the variable 'lastValue'
    // the 'if' condition checks whether the current value is greater than the previous one; if so, it increases the value of the variable 'increaseResult
    const lastValue = array[index - 1]
    if (presentValue > lastValue) {
      increaseResult++
    }
  }
})

console.log(`\nNumber of increased values: ${increaseResult}`)
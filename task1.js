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
/*-----------------------------------------------------------------*/
/*-Task 10: What is the total syntax error score for those errors?-*/
/*-----------------------------------------------------------------*/

const input = [
  '[({(<(())[]>[[{[]{<()<>>',
  '[(()[<>])]({[<{<<[]>>(',
  '{([(<{}[<>[]}>{[]{[(<()>',
  '(((({<>}<{<{<>}{[]{[]{}',
  '[[<[([]))<([[{}[[()]]]',
  '[{[{({}]{}}([{[{{{}}([]',
  '{<[[]]>}<{[{[{[]{()[[[]',
  '[<(<(<(<{}))><([]([]()',
  '<{([([[(<>()){}]>(<<{{',
  '<{([{{}}[<[[[<>{}]]]>[]]'
]

const syntaxScoring = () => {

  const stack = []
  const closingBlock = {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">"
  }
  const errorPoints = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
  }
  const errorCount = {
    ")": 0,
    "]": 0,
    "}": 0,
    ">": 0
  }

  const openingBracket = (char) => {
    // the test() method performs a match between a regular expression and a character
    return /[({\[<]/.test(char)
  }

  const closingBracket = (char) => {
    const expected = stack.pop()
    // compares the expected and actual brackets
    if (expected !== char) {
      // in case of a mismatch, it increments the error count for the respective closing bracket
      errorCount[char]++
    }
  }

  const calculateResult = () => {
    // the calculateResult function calculates the total syntax error score

    return Object.keys(errorPoints)
      .map(key => errorPoints[key] * errorCount[key])
      .reduce((total, score) => total + score, 0)
  }

  for (const row of input) {
    for (const char of row) {
      if (openingBracket(char)) {
        // the corresponding closing bracket to the currently found opening bracket is pushed onto the stack
        stack.push(closingBlock[char])
      } else {
        // in the case of a different bracket that is not an opening bracket, the following function is called
        closingBracket(char)
      }
    }
  }

  const totalResult = calculateResult()
  console.log(`The total syntax error score for this file is: ${totalResult}`)
}

syntaxScoring()
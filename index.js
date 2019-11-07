function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return (adjective = "special") => `You are ${flair}${adjective}${flair}!`
}

const add = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

const actionApplyer = (int, funcArr) => {
  if (funcArr.length === 0) {
    return int
  } else {
    return funcArr.reduce((accumulator, func) => {
      return func(accumulator)
    }, int)
  }
}

const Calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  actionApplyer: actionApplyer
}

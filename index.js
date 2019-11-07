function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return (adjective = "special") => `You are ${flair}${adjective}${flair}!`
}

const add = () => 1 + 3

const subtract = () => 1 - 3

const multiply = () => 1 * 3

const divide = () => 10 / 5

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

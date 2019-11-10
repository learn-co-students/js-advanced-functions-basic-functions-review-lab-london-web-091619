let wrapAdjective = function(flair="*"){
    return function(param = "special") {
        return `You are ${flair}${param}${flair}!`
    }
}

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

const Calculator = {
    add:  (a,b) => {return a+b},
    subtract: (a,b) => {return a-b},
    multiply: (a,b) => {return a*b},
    divide: (a,b) => {return a/b}
    
}

function actionApplyer(startInt, funcArray){
    let result = startInt
    if(funcArray.length === 0){
        return startInt
    } else {
        funcArray.forEach((func)=>{
            result = func(result) 
        })
    }
    return result
}

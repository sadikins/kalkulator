document.querySelectorAll(".class name")

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)

    })

}) 


const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number

    
}

// const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})




let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'



numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
     updateScreen(currentNumber)   
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}



// operators.forEach((operator) => {
//     operator.addEventListener("click", (event) => {
//         console.log(event.target.value)
//     })
// })



const inputOperator = (operator) => {

    if (calculationOperator === '') {
        
        prevNumber = currentNumber
    }

    calculationOperator = operator
    currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')



const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseInt(currentNumber)
            break
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break
        case '%':
            result = parseInt(prevNumber) % parseInt(currentNumber)
            break
        default:
            break
    }

    currentNumber = result
    calculationOperator = ''
}


equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber='0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})



const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {

    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})



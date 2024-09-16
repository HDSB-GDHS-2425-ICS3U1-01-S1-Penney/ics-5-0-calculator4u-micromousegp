function runProgram () {
// start text
console.log ("welcome to a calculator I think")
console.log ("please enter your first number")
console.log ("...")


// full function for the first number
let num1 = prompt ("please enter your first number")
if (isNaN(num1)) { // checking for number
	console.log ("invalide number")
} else {
    console.log (num1)
}

// function for operation
let operation = prompt ("please enter your operation for  calculation")
if (operation == "-" || operation == "+" || operation == "*" || operation == "/") {
    console.log (operation)
} else {
    console.log ("invalide operation")
}

// full function for the second number
let num2 = prompt ("please enter your second number")
if (isNaN(num2)) { // checking for number
    console.log ("invalide number")
} else {
    console.log (num2)
}


if (operation == "+") {
    let ans = (Number(num2)) + (Number(num1))
    console.log (ans)
} else if (operation == "-") {
    let ans = (num1 - num2)
    console.log (ans)
} else if (operation == "*") {
    let ans = (num1 * num2)
    console.log (ans)
} else if (operation == "/") {
    let ans = (num1 / num2)
    console.log (ans)
}
runProgram ()
}
runProgram ()

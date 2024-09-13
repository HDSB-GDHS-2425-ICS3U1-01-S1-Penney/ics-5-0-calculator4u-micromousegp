console.log ("welcome to a calculator I think")
console.log ("please enter your first number")
console.log ("...")



let num1 = prompt ("please enter your first number")
if (typeof(Number(num1)) === "number") { 
	console.log (num1)
} else {
    console.log ("invalide number")
}

let operation = prompt ("please enter your operation for  calculation")
if (operation == "-" || operation == "+" || operation == "*" || operation == "/") {
    console.log (operation)
} else {
    console.log ("invalide operation")
}

let num2 = prompt ("please enter your first number")
if (typeof(Number(num2)) === "number") {
	console.log (num2)
} else {
    console.log ("invalide number")
}

if (operation == "+") {
    let ans = (Number(num1) + Number(num2))
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
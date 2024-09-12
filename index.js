console.log ("welcome to a calculator I think")
console.log ("please enter your first number")
console.log ("...")

// set memery, call memery

let num2
let ans

let num1 = prompt ("please enter your first number")

if (typeof(num1) === number) {
	// value is numeric
} else {
    console.log ("fuck")
}


let operation = prompt ("please enter your operation for  calculation")

if (operation == "-" || operation == "+" || operation == "*" || operation == "/") {
    console.log (operation)
} else {
    console.log ("invalide operation")
}





if (operation == "+") {
    num1 + num2
} else if (operation == "-") {
    num1 - num2
}
3
// A simple calculator program

//Captures the mathematical sign input from user

let mathSign = prompt("Enter Operator: +, -, * or /");

//Captures the values from User
let value1 = Number(prompt("Enter first number"));
let value2 = Number(prompt("Enter second number"));

let result;

if (mathSign == "+") {
    result = value1 + value2; 
 }
else if (mathSign == "-") {
    result = value1 - value2;
}
else if (mathSign == "*"){
    result = value1 * value2;
}
else{
    result = value1/value2;
}

console.log(" %d %s %d = %d ", value1,mathSign ,value2, result)
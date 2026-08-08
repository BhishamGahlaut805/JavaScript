console.log("Simple calculator to perform basic arithmetic operations");
let arithmeticArray= [
    function add(a,b){
        return a+b;
    },
    function subtract(a,b){
        return a-b;
    },
    function multiply(a,b){
        return a*b;
    },
    function divide(a,b){
        if(b==0){
            return "Division by zero is not allowed.";
        }
        return a/b;
    }
];

let ans=arithmeticArray[0](10,5);
console.log("Addition of 10 and 5 is: "+ans);
let ans2=arithmeticArray[1](10,5);
console.log("Subtraction of 10 and 5 is: "+ans2);
let ans3=arithmeticArray[2](10,5);
console.log("Multiplication of 10 and 5 is: "+ans3);
let ans4=arithmeticArray[3](10,5);
console.log("Division of 10 and 5 is: "+ans4);
/*
Simple calculator to perform basic arithmetic operations
Addition of 10 and 5 is: 15
Subtraction of 10 and 5 is: 5
Multiplication of 10 and 5 is: 50
Division of 10 and 5 is: 2
*/

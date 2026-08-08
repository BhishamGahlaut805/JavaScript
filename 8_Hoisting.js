console.log("predicting the scope of variable and its value");

//Hoisting : The default behavior of moving all the declarations to the top of the current scope (to the top of the current script or the current function).
//In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.
//This is possible because, during the compile phase, all the variable declarations are moved to the top of their scope regardless of where they are declared. This behavior is known as hoisting.  


let a=10;
console.log(a);

// console.log(b); //error cannot access 'b' before initialization because it is in temporal dead zone and let
let b=20;
console.log(c); //undefined because of hoisting and var
var c=30;

function test(){
    console.log(d); //undefined because of hoisting and var
}
test(); //undefined because of hoisting and var
var d=40;
test(); //40

/*
predicting the scope of variable and its value
10
undefined
undefined
40
*/

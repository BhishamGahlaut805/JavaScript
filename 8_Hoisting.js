console.log("predicting the scope of variable and its value");

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

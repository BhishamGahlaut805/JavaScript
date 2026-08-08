try{
    console.log("try block enters here");
    console.log(x);
    console.log("try block ends here");//not executed
} catch (error) {
    console.error("An error occurred:", error.message);
}
finally {
    console.log("Finally block executes regardless of error occurrence.");
}

let a=10;
let b=0;
try {
    // if (b === 0) {
    //     throw new Error("Division by zero is not allowed.");
    // }
    let c = a / b;
    console.log("Result:", c);
} catch (error) {
    console.error("An error occurred:", error.message);
}
finally {
    console.log("Finally block executes regardless of error occurrence.");
}

try {
  if (b === 0) {
      throw new Error("Division by zero is not allowed.");
  }
  if(a===10){
    throw new Error("a is 10, which is not allowed.");
  }
  let c = a / b;
  console.log("Result:", c);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("Finally block executes regardless of error occurrence.");
}

//== vs === operator
console.log("== vs === operator");
console.log(5 == '5');  // true, because == performs type coercion
console.log(5 === '5'); // false, because === checks for both value and type
console.log(null == undefined);  // true, because == considers them equal
console.log(null === undefined); // false, because === checks for both value and type
console.log(NaN == NaN);  // false, because NaN is not equal to itself
console.log(NaN === NaN); // false, because NaN is not equal to itself

console.log("== vs === operator with objects");
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 == obj2);  // false, because they are different objects in memory
console.log(obj1 === obj2); // false, because they are different objects in memory

/*
try block enters here
An error occurred: x is not defined
Finally block executes regardless of error occurrence.
Result: Infinity
Finally block executes regardless of error occurrence.
An error occurred: Division by zero is not allowed.
Finally block executes regardless of error occurrence.
== vs === operator
true
false
true
false
false
false
== vs === operator with objects
false
false
*/



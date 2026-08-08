// Garbage Collection in JavaScript

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    function = () => {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    };
}


// -------------------------------
// Illustration of Garbage Collection
// -------------------------------

// person1 points to a Person object
let person1 = new Person("Bhisham", 25);

person1.function();

// person1 no longer references the object.
// The Person object becomes eligible for garbage collection
// if there are no other references to it.
person1 = null;


// -------------------------------
// Garbage Collection inside a function
// -------------------------------

function test() {
    let person2 = new Person("Gahlaut", 26);

    person2.function();

    // person2 no longer references the object.
    // The object becomes eligible for garbage collection
    // if there are no other references to it.
    person2 = null;
}

test();


// -------------------------------
// Object.freeze() is NOT Garbage Collection
// -------------------------------

let person3 = new Person("Bhisham", 25);

person3.function();

// Object.freeze() prevents modifications to the object.
// It does NOT make the object eligible for garbage collection.
Object.freeze(person3);

console.log(person3);


// person3 can still be accessed
console.log("person3.name: " + person3.name);


// -------------------------------
// Making person3 eligible for GC
// -------------------------------

// Now the reference is removed.
person3 = null;

// person3's Person object is now eligible for garbage collection
// provided no other references to it exist.

console.log(person3); // null
/*
Name: Bhisham
Age: 25
Name: Gahlaut
Age: 26
Name: Bhisham
Age: 25
Person { function: [Function: function], name: 'Bhisham', age:25 }
person3.name: Bhisham
null
PS C:\Users\bhish\OneDrive\Desktop\JavaScript>
*/


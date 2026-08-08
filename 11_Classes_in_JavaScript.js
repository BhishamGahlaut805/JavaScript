//A Class is a blueprint for creating objects with predefined properties and methods. It allows you to define a structure for your objects and encapsulate related functionality. In JavaScript, classes were introduced in ES6 (ECMAScript 2015) and provide a more elegant syntax for creating constructor functions and prototypes.

class Human{
    //properties
    age=13;
    #wt=80; //private data member
    ht=180;

    //behaviors
    walk(){
        console.log("Human is walking");
    }
    running(){
        console.log("Human is running");
    }
    //getters and setters are used in classes to access and modify private properties. They provide a way to encapsulate the internal state of an object and control how it is accessed or modified from outside the class.
    get fetchWt(){
        return this.#wt;
    }
    set updateWt(wt){
        this.#wt=wt;
    }
}
let obj=new Human();
console.log(obj.age);
console.log(obj.fetchWt);
console.log(obj.ht);
obj.walk();
obj.running();


class Student {
    //properties
    rollNo;
    #marks; //private data member
    section;
    //Constructor
    constructor(rollNo, marks, section){
        this.rollNo=rollNo;
        this.#marks=marks;
        this.section=section;
    }

}
let student1=new Student(101, 90, 'A');
console.log(student1.rollNo);
console.log(student1.section);
console.log(student1.marks); //undefined because marks is private data member


class sum{
    //properties
   a;
   b;
   c;
   fxn;
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
    }
    fxn=()=>{
        console.log(this.a+this.b+this.c);
    }

}
let s=new sum(1,2,3);
console.log(s.a);
console.log(s.b);
console.log(s.c);
s.fxn();


class person
{
    name;
    constructor(name="Bhisham Gahlaut"){
        this.name=name;
    }
  function=()=>{
    console.log("My name is "+this.name);
  }
}
let p=new person("Harman kumar");
console.log(p.name);
p.function();

/*
Output :
13
80
180
Human is walking
Human is running
101
A
undefined
1
2
3
6
Harman kumar
My name is Harman kumar
*/

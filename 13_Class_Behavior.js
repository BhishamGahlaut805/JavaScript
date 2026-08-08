let obj ={
    age: 25,
    wt: 70,
    ht: 5.9,
}
console.log(obj.age);
obj.age=26;
console.log(obj.age);
console.log(obj.wt);

//Cloning an object
//1.Using Spread Operator
let obj2={...obj};
console.log("Cloned object age :",obj2.age);
console.log("Cloned object:",obj2.wt);
console.log("Cloned object:",obj2.ht);

obj2.age=30;
console.log("Cloned object age after change:",obj2.age);
console.log("Original object age after change in cloned object:",obj.age);

//2.Using Object.assign()
let destObj=Object.assign({},obj);
console.log("Cloned object age :",destObj.age);
console.log("Cloned object:",destObj.wt);
console.log("Cloned object:",destObj.ht);

//Using iteration
let destObj2={};
for(let key in obj){
    destObj2[key]=obj[key];
}
console.log("Cloned object age :",destObj2.age);
console.log("Cloned object:",destObj2.wt);
console.log("Original object age after change in cloned object:",destObj2.age);

/*
25
26
70
Cloned object age : 26
Cloned object: 70
Cloned object: 5.9
Cloned object age after change: 30
Original object age after change in cloned object: 26
Cloned object age : 26
Cloned object: 70
Cloned object: 5.9
Cloned object age : 26
Cloned object: 70
Original object age after change in cloned object: 26
*/


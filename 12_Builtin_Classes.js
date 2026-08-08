console.log("Builtin Classes in JavaScript");
console.log("Date Class");
let date=new Date();
console.log(date);

console.log("Math Class");
console.log(Math.PI);
console.log(Math.E);

console.log("Random Number between 0 to 1: "+Math.random());
console.log("Random Number between 0 to 100: "+Math.floor(Math.random()*100));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.round(4.5));
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.abs(-5));
console.log(Math.sin(30*Math.PI/180));
console.log(Math.cos(30*Math.PI/180));

let date2=new Date('2020-08-08');
console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
let date1=new Date('August 8,2026');
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());

/*
Builtin Classes in JavaScript
Date Class
2026-08-08T14:33:13.322Z
Math Class
3.141592653589793
2.718281828459045
Random Number between 0 to 1: 0.18978209389021183
Random Number between 0 to 100: 17
5
4
5
5
1
8
4
5
0.49999999999999994
0.8660254037844387
2020
7
8
2026
7
8
*/

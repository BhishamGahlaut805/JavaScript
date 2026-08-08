let x = 10;

function test() {
  let x = 20;

  if (true) {
    let x = 30;
    console.log(x); //30
  }

  console.log(x);   //20
}

test();

console.log(x); //10
{
var num=10;
}

console.log(num); //10 because var is function scoped and not block scoped
/*
PS C:\Users\bhish\OneDrive\Desktop\JavaScript> node "c:\Users\bhish\OneDrive\Desktop\JavaScript\9_Scop_Variables.js"
30
20
10
10

*/

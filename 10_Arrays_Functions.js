var x = 10;

function test() {
  var x = 20;

  for (var i = 0; i < 3; i++) {
    x += i;
  }

  return x;
}

console.log(test());
console.log(x);

/*
PS C:\Users\bhish\OneDrive\Desktop\JavaScript> node "c:\Users\bhish\OneDrive\Desktop\JavaScript\10_Arrays_Functions.js"
23
10
*/


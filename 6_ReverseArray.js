let array=[1,2,3,4,5,6,7,8,9,10];
console.log("Original Array: "+array);

for(let i=0;i<array.length/2;i++){
    let temp=array[i];
    array[i]=array[array.length-1-i];
    array[array.length-1-i]=temp;
}

console.log("Reversed Array: "+array);

/*
PS C:\Users\bhish\OneDrive\Desktop\JavaScript> node "c:\Users\bhish\OneDrive\Desktop\JavaScript\6_ReverseArray.js"
Original Array: 1,2,3,4,5,6,7,8,9,10
Reversed Array: 10,9,8,7,6,5,4,3,2,1
*/


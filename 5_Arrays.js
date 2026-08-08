console.log("Count even,odd,and sum of all numbers in an array");
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;
let oddCount = 0;
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
    sum += numbersArray[i];
}
console.log("Count of even numbers: " + evenCount);
console.log("Count of odd numbers: " + oddCount);
console.log("Sum of all numbers: " + sum);

/*
PS C:\Users\bhish\OneDrive\Desktop\JavaScript> node "c:\Users\bhish\OneDrive\Desktop\JavaScript\5_Arrays.js"
Count even,odd,and sum of all numbers in an array
Count of even numbers: 5
Count of odd numbers: 5
Sum of all numbers: 55
*/

console.log("Find second largest number in an array");
let numbersArray = [10, 20, 30, 40, 50];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > largest) {
    secondLargest = largest;
    largest = numbersArray[i];
  } else if (numbersArray[i] > secondLargest && numbersArray[i] != largest) {
    secondLargest = numbersArray[i];
  }
}
console.log("Second largest number: " + secondLargest);
/*
Find second largest number in an array
Second largest number: 40
*/

// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

function isDivBy3(num) {
  return (num % 3 === 0);
}

console.log(isDivBy3(0));
console.log(isDivBy3(3));
console.log(isDivBy3(10));
console.log(isDivBy3(345));

// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

function strLength(str) {
  return str.length;
}

console.log(strLength("Hello"));
console.log(strLength(""));
console.log(strLength("abcdefghijklmnopqrstuvwxyz"));
console.log(strLength("     "));

// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

const arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[arr.length-1]);
arr.push(4);
console.log(arr);
arr.unshift(["a", "b", "c"]);
console.log(arr);
console.log(arr[0][0]);

// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

function minsPastMidnight() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const mins = timeNow.getMinutes();
  return hours*60 + mins + " minutes have elapsed since midnight.";
}

console.log(minsPastMidnight());

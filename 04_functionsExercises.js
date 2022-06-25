// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.
function logGreeting() {
  console.log("Hello!")
}
logGreeting()

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName() {
  return "Linda Sanchez"
}
console.log(getName())

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().
function logGreeting2() {
  return "Hello! My name is " + getName() + "."
}
console.log(logGreeting2())

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.
function sum(a, b, c) {
  return a + b + c
}
console.log(sum(1, 2, 3))
console.log(sum(-1, 0, 1))
console.log(sum(1, 10, 100))

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
function discount(age) {
  return (0 < age && age <= 14) || (age >= 65)
}
console.log(discount(10))
console.log(discount(50))
console.log(discount(70))

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
function repeat(n, str) {
  for (i = 0; i < n; i++) {
    return str
  }
  return ""
}
console.log(repeat(0, "hello"))
console.log(repeat(5, "hello"))
console.log(repeat(10, "hello"))

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// mysteryFunction1 doubles the value of p1 passed in as a paramter
// 2. What prints out for the value of y
// For the value of y, it prints out "The value of y is 4".
// 3. What prints out for the value of z
// For the value of z, it prints out "The value of z is 8".
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// I was correct! The mystery function is not applied to y, so whatever value is stored there remains.

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// mysteryFunction2 returns difference between the first value, p1, and the second value, p2.
// 2. What prints out for the value of a
// For the value of a, it prints out "The value of a is 6".
// 3. What prints out for the value of b
// For the value of b, it prints out "The value of b is 5".
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
// I was correct! a is simply 10 - 4, while b passes in a as a parameter, so 6 - 1 = 5.

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";
const items = groceryList.split(',');
console.log(items)

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
const first2 = mySchedule.split('--->', 2)
console.log(first2)
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// The MDN was helpful in understanding split.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.

// 4 Tasks from Javascript Fundamentals: Objects
//
// Task 1 - Hello, object
// Write the code, one line for each action
// 1. Create an empty object user.
let user = {}
// 2. Add the property name with the value John.
user.name = "John"
// 3. Add the property surname with the value Smith.
user.surname = "Smith"
// 4. Change the value of the name to Pete.
user.name = "Pete"
// 5. Remove the property name from the object.
delete user.name

// Task 2 - Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  return Object.keys(obj).length == 0
}

let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

// Task 3 - Sum object Properties
// We have an object storing salaries of our team
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
let sum = 0;
if (isEmpty(salaries)) {
  sum = 0;
}
else {
  for (const salary in salaries) {
    sum+=salaries[salary];
  }
}
console.log(sum);

// Task 4 - Multiply numeric property values by 2
// Create a function multipleNumeric(obj) that multiplies all numeric property values of obj by 2.
function multiplyNumeric(obj) {
  for (const item in obj) {
    if (typeof obj[item] == "number") {
      obj[item]*=2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);

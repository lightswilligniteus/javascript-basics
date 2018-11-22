//Hello, object
//Create an empty object user.
users = {};

// Add the property name with the value John.
users = {
  name:"John"
};

// Add the property surname with the value Smith.
users = {
  name: "John",
  surname: "Smith"
}

// Change the value of the name to Pete.
users.name = "Pete";

// Remove the property name from the object.
delete user.name;



//Write the function isEmpty(obj) which returns true if the object
//has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//Is it possible to change an object declared with const? What do you think?
// const user = {
//   name: "John"
// };
//
// // does it work?
// user.name = "Pete";
Yes


//We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//
// If salaries is empty, then the result must be 0.
let sum = 0;
for(prop in salaries) {
    sum += salaries[prop];
}

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
//
// For instance:
//
// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// multiplyNumeric(menu);
//
// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
//
// P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] == 'number') {
      obj[prop] = obj[prop] * 2;
    }
  }
}

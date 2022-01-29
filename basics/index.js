// let name = 'Mosh';
// console.log(name);

// // variables cannot be a reserved keyword let, if, else, var
// // should be meaningful
// // cannot start with a number (1name)
// // Cannot contain a space of hyphen (-)
// // Are case-sensitive

// let firstName = 'James';
// console.log(firstName);
// let lastName = 'Ivy';
// console.log(lastName);

// // var is rarely used anymore more popular is es5
// // if you need to reassign a variable use let
// // if you do not need to reassign a variable use const bc const variables cannot be reassigned 
// // const interestRate = 0.3; 
// // interestRate = 1;
// // console.log(interestRate);

// // Primitive Types / Values Types
// // String, numbers, boolean, undefined, and null
// let nameOne = 'Mosh'; // string literal
// let ageOne = 30; // number literal 
// let isApproved = true // boolean literal - can be true or false
// let firstNameOne = undefined; // if we do not initialize undefined will be returned - value must be assigned
// let selectedColor = null; // use null to clear value of variable (ex: 'red')

// // JavaScript is a dynamic language

// // Reference Types 
// // Objects, Arrays, Functions 

// //Objects - name , age, address = properties of a person


// let person = {
//     name: 'Mosh',
//     age: 30
// };

// // Dot Notation - cleaner and easier
// person.name = 'John'; 

// // Bracket Notation
// let selection = 'name';
// // person['name'] = 'Mary'; // or
// person[selection] = 'Mary';

// console.log(person.name);


// // Arrays - list of objects use arrays to store lists
// // to access elements within an array we use indexes 
// // array is an object in javascript see typeof in console
// //length is a property = returns number of items or elements in an array
// // an array is an data structure we use to represent a list of items

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);



// //Functions - a set of statements that performs a task or calculates a value

// //logic is to display a message on the console
// //functions can have inputs and change how the function behaves


// // this function is performing a task - to display something on the console
// function greet(name, lastName) { // name is a parameter - time of declaration
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('John', 'Smith'); // argument to the greet function - value we supply for that parameter
// greet('Mary', 'Smith')

// Function that calculating a value
// function square(number) {
//     return number * number;
// }

// let number = square(2); // square(2) returns a value - now we can use this value to initialize a variable
// console.log(number);




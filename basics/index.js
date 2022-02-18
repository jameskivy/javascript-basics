// let name = 'James';
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

// const interestRate = 0.3;
// interestRate = 1    // error in console bc const will not let you reassign have to use let
// console.log(interestRate);

// // Primitive / Value Types / Reference Types
// // String, numbers, boolean, undefined, and null

// let nameOne = 'James'; // string literal
// console.log(typeof(nameOne))
// let ageOne = 30; // number literal 
// console.log(typeof(ageOne))
// let isApproved = true // boolean literal - can be true or false
// console.log(typeof(isApproved))
// let firstNameOne = undefined; // if we do not initialize undefined will be returned - value must be assigned
// console.log(typeof(firstNameOne))
// let selectedColor = null; // use null to clear value of variable (ex: 'red')
// console.log((typeof(selectedColor))) // type of is an object

// JavaScript is a dynamic language

// Reference Types 
// Objects, Arrays, Functions 

// //Objects - name , age, address = properties of a person

// key value pairs 
// let person = {
//     name: 'James',
//     age: 27
// };

// console.log(person)

// // Dot Notation - cleaner and easier
// person.name = 'John';
// console.log(person.name)


// // Bracket Notation
// let selection = 'name';
// person['name'] = 'Mary'; // or
// person[selection] = 'Mary';

// console.log(person.name);


// Arrays - list of objects use arrays to store lists
// to access elements within an array we use indexes 
// array is an object in javascript see typeof in console
// length is a property = returns number of items or elements in an array
// an array is an data structure we use to represent a list of items

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green'
// console.log(selectedColors);
// selectedColors[3] = 28;
// console.log(selectedColors)
// console.log(selectedColors.length);


// //Functions - a set of statements that performs a task or calculates a value

// logic is to display a message on the console
// functions can have inputs and change how the function behaves

// this function is performing a task - to display something on the console

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
// or 
// console.log(square(4));
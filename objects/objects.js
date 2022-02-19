// Basics
// objects are a collection of key value pairs

// declare these variables represent a circle and are highly related - put inside an object and we can pass in any function
// let radius = 1; 
// let x = 1; 
// let y = 1; 

// purpose of an object is to group related variables 
// functions should operate on these variables
// the value of a key pair can be anything in javascript

// Object-oriented Programming (OOP) - style of programming where we see a program as a collection of objects that talk to each other to perform some functionality

// circle object has a few properties and a function
// if we have a function apart of an object we called that function a method

// const circle = {
//     radius: 1, 
//     location: {
//         x: 1, 
//         y: 1
//     }, 
//     isVisible: true, 
//     draw: function() {
//         console.log('draw')
//     }
// };

// circle.draw(); // we are calling the draw Method of the circle object



// Factory Function - produce objects

// Camel Notation: oneTwoThreeFour

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);
// // console.log(circle1.draw());

// const circle2 = createCircle(2);
// console.log(circle2);
// console.log(circle2.draw());



// Constructor Function

// job of this function is to construct or create an object
// Pascal Notation: OneTwoThreeFour use when writing this kind of function
// instead of using return we are going to take a diff approach 
// keyword 'this' - is a reference to an object that is executing this piece of code (reference an empty object)

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
//     // return this      // dont have to type this - happens under the hood
// }

// // create objects
// const circle = new Circle(1); // new operator 
// const x = {}; 
// // creates an empty JS object (const x = {}), 
// // then it will set 'this' to point to this new empty object, 
// // finally the new operator will return this object from this function

// // access properties
// console.log(circle.radius);



// Dynamic Nature of Objects

// objects in javascript are dynamic which means once you create them you can always add new properties or methods or remove existing ones

// const circle = {
// radius: 1
// };

// circle = {}; // cannot reassign due to const
// // but we can always change circle object by adding or removing properties

// circle.color = 'yellow';
// circle.draw = function() {};

// delete circle.color; 
// delete circle.draw;

// console.log(circle);



////////////////////////////////////////
// Constructor Property
// every object in JS has a property called constructor and that references the function that was used to construct or create that object

// Function are objects 
////////////////////////////////////////



// Value vs Reference Types

// value or primitive types - number, string, boolean, symbol, undefined, null
// reference types - object, function, array
// primitives are copied by their value and, 
// objects are copied by their reference

// let x = 10;
// let y = x;

// x = 20; // x will be 20 in the console completely different


// reference type used below
// let x = { value: 10 }; // when we use object it is not stored in this variable
// let y = x;

// x.value = 20;


// Primitive - another example
// are only copied by value - dealing w two independent 'number'
// let number = 10; // declare number variable

// function increase(number) {
//     number++; // completely independent of the other number variable
// }

// increase(number); // called increase and pass number variable 
// console.log(number); // will print 10 in console


// Reference type or obj - example
// we are not dealing w two independent copies
// we have two variables that are pointing to the same obj
// let obj = { value: 10 }; // value property 

// function increase(obj) { // local obj will point to same obj we defined above
//     obj.value++; 
// }

// increase(obj); // we get 11 bc the obj is passed by it's reference
// console.log(obj); // value of 11


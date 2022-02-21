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
//         console.log('draw');
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



////// Enumerating Properties of an Object

// const circle = {
//     radius: 1,
//     draw () {
//         console.log('draw;')
//     }
// };

// for (let key in circle) // iterate over properties in object
//     console.log(key, circle[key]);   // if want value of property or key use bracket notation

// for (let key of circle)    // 'of' is only use for iterables objects are not iterable (only used for arrays and maps)
//     console.log(key);      // easiest way

// however you may use the below as well
// for (let key of Object.keys(circle))    // can get keys and will return an array (string array) - Object is built in constructor function
    // console.log(key);

// for (let entry of Object.entries(circle)) // return each key value pair as an array and not string array
    // console.log(entry);

    // if you want to see if a particular object has a given property or method us in operator

// if ('radius' in circle)     // with in operator we can see if property or method exists in a given object
    // console.log('yes');     // will print yes if property exist - nothing will appear in console if it does not


//// Cloning an Object

// const circle = {
//     radius: 1, 
//     draw () {
//         console.log('draw');
//     }
// };

// Object.assign copies properties and methods from one or more source objects into a target object {} and 
// we can use to clone an object or combine multiple objects into a single object

// spread operator is used to spread an object - which means getting all of properties and methods and putting them into
// another object 

//// this way is old ////////
// const another = {};

// for (let key in circle)
//     another[key] = circle[key];


// does same thing as above three lines
// const another = Object.assign({}, circle); // 


// adding properties 
// const another = Object.assign({
//     color: 'yellow',
// }, circle);

// use spread operator - easiest way to clone
// const another = { ...circle };

//     console.log(another);



//// Garbage Collection
// garbage collector jobs is to find variable and const that are no longer used and deallocate the memory that was allocated earlier
// runs in background behind scenes - have no control - do not have to worry about this as JS developer

// let circle = { };   // memory is automatically allocate to object once initialized 
    // console.log(circle) // next we can use and we do not have to deallocate



// Built-in Objects - Math (see MDN)
// if you have to use math in applications refer to math methods ex below:

// Math.random() - returns new random number b/w 0-1 - function can be written to get random # b/w two values
// Math.round(1.9) - will return 2
// Math.max(1, 2, 3, 4, 5) - will return 5 in console
// Math.min(1, 2, 3, 4, 5) - will return 1 in console


// Built-in Objects - String
// string is primitive type and primitive types do not have properties and methods only objects do
// two kinds of strings 

// String primitive
// search javascript string
// when we use . notation - wraps this w a string object and can work w it
// const message = ' This is my first message ';
// user types a certain numbers of characters - length for limit of characters = < then 100 characters in input field
// console.log(message.length);  // length property returns number of characters in a string
// console.log(message[0]);     // returns 'T' - access a character at given index
// console.log(message.includes('my'));     // returns true bc it has the word my
// console.log(message.startsWith('This')); // returns true - searches are case sensitive - lowercase t return false
// console.log(message.endsWith('e'));     // returns true for last character
// console.log(message.indexOf('my'));      // returns 8 starting point - used for finding index of given character or string inside the string use this
// console.log(message.replace('first', 'second'));    // returns new string and does not modify the original one
// console.log(message);   // will still print original
// console.log(message.toUpperCase())  // will print in CAPS
// console.log(message.trim());    // gets rid of white space - trimLeft() and trimRight() also exists
// console.log(typeof(message));

// Escape notation
// const message2 = 'This is my third \'time doing this'; // single quote is apart of this string
// const message3 = 'This is my\n third time doing this'; // starts new line backlash n
// console.log(message2); 
// console.log(message3.split(' ')); // splits sentence and returns an array of items

// String object
// constructor function below:
// const another = new String('hi') // pass string here
// console.log(typeof(another))


// Template Literals
// we can format string how we want to particularly useful for email
// we can add placeholders ${expression here} - we can pass name of variable or constant
// no need to concatenate really
// we can add any expression that produces a value in b/w curly braces and can also call function that 
// returns a value

// Object {}
// Boolean true, false
// String '', ""
// Template ``

// const name = 'James';

// const another = 
// `Hi ${name}, 

// Thank you for reaching out regarding this role. You are number ${1 + 3} on my list
// to interview. 

// Best regards, 
// Emily`;

// console.log(another);



// Built-In Object - Date 
// Note: there are more built-in objects and will learn as course continues
// constructor function

// const now = new Date(); 
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2021);  // changed year here

// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toISOString()); // method - date T then time - commonly used - talks to backend -transfer b/w client and server









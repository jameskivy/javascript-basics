/////////// Arrays ////////////
// adding new elements, finding new elements, removing elements, splitting arrays, combining arrays

///// Adding Elements ///
// const will not let you reassign but however we can modify elements of existing array
// arrays are objects and are 0 indexed
// we can use dot notation to see all properties and methods defined in arrays

// const numbers = [3, 4];

// End - adding additional elements to end of array use PUSH

// numbers.push(5, 6);

// Beginning - adding elements to beginning of array use UNSHIFT - push to right

// numbers.unshift(1, 2);

// Middle
// [ 1, 2, 3, 4, 5, 6 ]
// splice allows you to add or remove elements at any given position of index
// first parameter is starting position 1) 2 index = 3, 2) delete = 0, 3) insert value you want to add  

// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);



/////// Finding Elements (Primitives) //////////

// all of the methods below has a second parameter which is optional and it is the starting index

// const numbersOne = [1, 2, 3, 4];

// indexOf will search array for the element and if element exists this method will return the index of that element in the array
// if it does not exist it will return -1

// console.log(numbersOne.indexOf('a')); // logs -1 bc it does not exist
// console.log(numbersOne.indexOf(4)); // logs 3 bc that is it's index
// console.log(numbersOne.indexOf('1')); // logs -1 bc we don't have 1 as a string

// const numbersOne = [1, 2, 3, 1, 4];

// will log 3 in console
// console.log(numbersOne.indexOf(1, 2)); // pass second argument and it is the from index = index search will begin

// console.log(numbersOne.lastIndexOf(1)); // logs 3 bc this is the last in index of this element

// console.log(numbersOne.includes(1)); // returns true if given element exists in the array



/////// Finding Elements (Reference Types) //////////
// will be diff from primitives
// includes method will not work for reference types

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// *******CANNOT USE BELOW EXAMPLE HERE*******
// console.log(courses.includes({ id: 1, name: 'a' })); // returns false bc includes only works for primitive types
// the objects are in two diff locations in memory and have two diff references
// objects are references types

// will have to use find method or findIndex method for reference types
// when calling the find method - note that as an an argument to this method we have to pass a function
// we call this function a predicate and we use that to determine if a given element exists in the array or not
// aka callback function

// find methods returns first element it finds
// if no match is found it returns undefined

// const course = courses.find(function(course) {
//     return course.name === 'a';
// });

// console.log(course); // returns object { id: 1, name: 'a' }

// findIndex works exactly the same but instead of returning the course object it returns the index of the object

// const courseOne = courses.findIndex(function(courseOne) {
//     return courseOne.name === 'b';
// });

// console.log(courseOne); // returns 1 bc that's the index of the object


////// Arrow functions

// shorter way to write the predicate function and that's the arrow function
// whenever you want to pass a function as a callback function or as a argument to a different method
// you can use arrow function syntax

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// removed function keyword
// put fat arrow b/w parameters of the function and it's body to separate
// if function has single parameter you can drop the ()s - removing noise in the code and makes it cleaner
// if no parameters in function you have to pass empty ()s.

// const course = courses.find(course => {
//     return course.name === 'a'
// });

// console.log(course);

// OR ///
// if function is single line of code and returning a value you can write like below
// course goes to course.name equals a
// finding a course with a name equal to a

// const course = courses.find(course => course.name === 'a');

// console.log(course);


/// Removing Elements from an Array /////










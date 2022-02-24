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

// const numbers = [1, 2, 3, 4];

// End
// remove last element from array and return it
// const last = numbers.pop(); 

// Beginning
// remove element from beginning of array - return element removed
// const first = numbers.shift(); 

// Middle
// removing elements using splice 1) 2 begins at index, 2) 1 stands for first number at index
// remember 1 can be increased to 2 and two elements will be removed
// numbers.splice(2, 2);
// console.log(numbers);



///// Emptying an Array //////

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
// numbers = [];

// reassign to new array
// old array is still in memory
// if no other references to this object eventually it will be removed by garbage collector
// so if we have another variable called another and it pointing to same object (= numbers)
// this original array will not be garbage collected

// console.log(another); // points to original array
// console.log(numbers); // numbers is now pointing to new empty array bc of assignment

// empty an array this way works if you do not have any other references to the original array
// if you have multiple references pointing to an array this solution is not the best 


///// Solution 2 ////
// numbers.length = 0;

// empty array by setting length property to 0 and this will remove all elements
// the original array is truncated so it doesn't matter how many references you have to that array
// prob best solution or solution 1 if you don't have multiple references

// console.log(numbers);
// console.log(another);


//// Solution 3 ////
// numbers.splice(0, numbers.length);

// splice method you can go to a given position and remove one or more elements
// pretty noisy code


/// Solution 4 /////
// numbers.pop();

// pop method removes the last element from an array
// we can use loop here and keep calling this method as long as we have an element
// noisy code prob not the best way

// while (numbers.length > 0)
//     numbers.pop();

// console.log(numbers);
// console.log(another);



//// Combining and Slicing Arrays //////

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// to combine two arrays we can use concat method - returns new array

// const combined = first.concat(second);

// slice method = slice array into two parts
// pass 2 to 0 based index and end at 4

// const slice = combined.slice(2, 4); // logs [ 3, 4 ]
// const slice = combined.slice(2); // logs [ 3, 4, 5, 6 ]
// const slice = combined.slice(); // logs original array if nothing passed

// console.log(combined); // logs [ 1, 2, 3, 4, 5, 6 ]

// console.log(slice); // logs [ 3, 4 ]

// w both methods remember when dealing wih primitives they will be copied into target array
// but if you are dealing w objects the objects themselves are not copied the references are copied


// const fourth = [{ id: 1 }]; // reference type
// const fifth = [4, 5, 6];

// when we call concat method the {id} object is not copied to the combined2 array
// only its reference is copied

// const combined2 = fourth.concat(fifth);

// go to first array and get first element which is an object and change id to 10
// if will be changed to 10 as well

// fourth[0].id = 10;

// the same principle above goes to the slice method
// remember primitive is copied by value
// if object type copied by reference

// const slice2 = combined2.slice();

// console.log(combined2);
// console.log(slice2);


///// The Spread Operator //////
// can be used to combined two arrays as well
// cleaner and more flexible 

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// spread operator is used like this
// elements are returned individually
// const combined = [...first, ...second]; // logs [1, 2, 3, 4, 5, 6]

// const combined = [...first, 'a', ...second, 'b']; // logs [1, 2, 3, 'a', 4, 5, 6, 'b']
// console.log(combined);

// if no argument passed in slice method it will return original array
// const copy = combined.slice();

// create new array and return to put in new array
// spread ...combined array
// const copy = [...combined];
// console.log(copy);













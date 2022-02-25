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


///// Iterating an Array //////

// we have diff ways to iterate an array
// use for of loop to iterate an array

// const numbers = [1, 2, 3];

// for (let number of numbers) // number will be set to each element in array
//     console.log(number);
// we don't use index w for of loop but you can use w for in loop

// you can also use forEach() method to iterate an array
// all arrays have this method and takes a callback function
// pass a function here -> function takes parameter (number) -> log number on console
// once forEach method is called function will be executed for each element in the array
// each element will be passed as an argument to this function

// numbers.forEach(function(number) {
//     console.log(number);
// });

// we can also rewrite using arrow function syntax 
// numbers.forEach(number => console.log(number));

// callback function can optionally take second parameter known as the index
// numbers.forEach((number, index) => console.log(index, number));


/////// Joining Arrays /////////

// join has a separator that can be passed and it is optional
// have to pass a string

// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined); // logs [1, 2, 3]

// another method that goes hand in hand w join is the split method but it is not apart of arrays
// it's part of strings
// have to pass a separator string

// const message = 'This is my first message';
// const parts = message.split(' '); // separate using a white space
// console.log(parts);

// now that we have an array return we can use the join method - 5 elements returned
// we can use join to combine elements using a separator

// const combined = parts.join('-');
// console.log(combined);

// method is useful when using a URL slug
// cannot have white spaces in url



////// Sorting Arrays /////

// sort method - converts each element into a string and sorts the element in the array
// easy to use when you have numbers and strings in an array
// however we you have objects in array it does not work by default

// const numbers = [2, 3, 5, 4, 1]
// numbers.sort();
// console.log(numbers); // logs [1, 2, 3, 4, 5]

// a companion method is the reverse method
// reverse method - we can reverse the order of elements in an array

// numbers.reverse();
// console.log(numbers);


// sort will not work here bc its an object - nothing happens

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javaScript' },
// ];

// sort can take a function and compare objects
// not using else if bc it just creates extra noise in the code
// if lower case j it will not switch due to ascii table - each letter represents a number

// courses.sort(function(a, b){
// a < b => -1
// a > b => 1
// a === b => 0

//     const nameA = a.name.toUpperCase(); // toLowerCase() would work also;
//     const nameB = b.name.toUpperCase(); // toLowerCase() would work also;

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;

// });
// console.log(courses);



///// Testing the Elements of an Array /////

// every and some methods

// every has a callback function that takes three parameters 1) value: number, 2)index: number and 3) array and returns a boolean value
// every method is going to run this function on each element and once it returns false it stops running

// const numbers = [1, -1, 2, 3];

// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// });

// console.log(allPositive);


// some method checks to see if at least one element matches this criteria
// some method will run the callback function on every element in the array

// const numbers1 = [1, -1, 2, 3];

// const atLeastOnePositive = numbers1.some(function(value) {
//     return value >= 0;
// });

// console.log(atLeastOnePositive);



//// Filtering an Array //////
// filter array based on search criteria
// filter method will take callback function and check each element and return each value and create a new array

// const numbers = [1, -1, 2, -2, 3];

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered); // logs [1, 2, 3]



/////// Mapping an Array ////////

// map method we can map each item in an array to something else
// construct some html mark up using the elements in this array
// map takes a callback function
// map these numbers to strings but you can also map them to objects

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);
// console.log(filtered); // logs [1, 2, 3]

// const items = filtered.map(n => '<li>' + n + '</li>'); // concat using + sign
// console.log(items); // logs [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] 
// // returns array of strings

// const html = '<ul>' + items.join(' ') + '</ul>';
// console.log(html); // logs <ul><li>1</li> <li>2</li> <li>3</li></ul>
// // by default comma is used for join



// MAPPING OBJECTS
// filter and map return new array they do not modify the original array

// const numbers2 = [1, -1, 2, 3];

// const filtered2 = numbers2.filter(n => n >= 0);
// console.log(filtered2); // logs [1, 2, 3]

// // const items2 = filtered2.map(n => { value: n}); // undefined bc by default JS reads obj as a code block - parse
// const items2 = filtered2.map(n => ({ value: n })); // if return obj wrap obj in () so JS won't read this as a code block

// console.log(items2); // [ { value: 1 }, { value: 2 }, { value: 3 } ]
// // we mapped each number to an object with a value property


// map and filter method are chainable which means we can call them one after another
// refactored to better and cleaner code

// const numbers3 = [1, -1, 2, 3];

// const items3 = numbers3
//     .filter(n => n >= 0)
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1) // logs obj syntax
//     .map(obj => obj.value); /// logs [2, 3]

// console.log(items3);

// power of chaining and mapping



/////////// Reducing an Array //////////
// can use to calculate a total costs in a shopping cart
// sum of all numbers in array

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//     sum += n;

// console.log(sum);

// refactor below

// reduce method can reduce all of the elements in an array into a single value
// single value can be a number, string, obj, or anything
// we want to reduce the elements in an array into a single number
// takes a callback function with two parameters 
// 1) accumulator - just similar to sum above something we initialize 
// 2) currentValue - will be set to one element in the array
// in each function call we want to get currentValue and add it to the accumulator


// a = 0, c = 1 as result a = 1
// a = 1, c = -1 as result a = 0, // adding here
// a = 0, c = 2 as result a = 2
// a = 2, c = 3 as result 5

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);

/// OR for shorter code like this /////

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(sum);

// initialize accumulator to 0 here. second argument to the reduce method pass 0
// reduce method has two arguments one is a callback function and second argument is the initial value for the accumulator 
// note you can take away second argument 0 and accumulator will automatically be set to first element in array which is 1
















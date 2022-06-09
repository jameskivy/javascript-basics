////////// Function Declarations vs Expression ///////////////////


// Function declaration
// there are two ways to define a function 
// we do not have to terminate function declaration with ; - no errors

// walk();

// function walk() {
//     console.log('walk');
// }


// Anonymous Function Expression
// we can set a variable to a function
// this function does not have a name

// let run = function () {
//     console.log('run');
// };

// let move = run;  // move and run are referencing the same anonymous function which is one object in memory
// run();
// move();


// Named Function Expression

// let running = function walk() {
//     console.log('run');
// };



//////  Hoisting //////////////
// move function declaration to the top
// hoisting is the process of moving function declarations to the top of the javascript file - done automatically

// f declaration
// we can call walk before it is defined

// walk();

// function walk() {
//     console.log('walk');
// }

// f expression
// cannot call run before it is initialized


// const run = function() {
//     console.log('run')
// };

// run();


///////// Arguments ///////////
// working with the arguments object

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 3));


// function add() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(add(1, 2, 3, 4, 5, 100));



/////// Rest Operator ////

// function add(...args) {
//     return args.reduce((a, b) => a * b);
// }

// console.log(add(1, 2, 3, 4, 5, 100));

console.log(3>2>1)



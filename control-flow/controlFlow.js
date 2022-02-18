// two types of conditional statements
//if...else and switch...case

// if...else Example 

// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     statement
// }
// else if (yetAnotherCondition) {
//     statement
// }
// else
//     statement

// Hour- on a 24 time clock
// If hour is between 6am and 12pm: Good morning!
// If hour is between 12pm and 6pm Good afternoon!
// Otherwise: Good evening!

// let hour = 6 // declare variable and set value

// if (hour >= 6 && hour < 12) {    // check condition here // using comparison operators and logical AND
//     console.log('Good morning!');
// }
// else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon');
// }
// else 
//     console.log('Good evening');



// Switch...case

// let role = 'moderator';

// switch(role) {      // used role to write variable - do not use condition here
//     case 'guest':   // case compares the value of variable with something - can also use numbers or booleans here - booleans is not common
//         console.log('Guest user');
//         break;      // use break to jump out of switch block

//     case 'moderator':
//         console.log('Moderator user');
//         break;

//     default:        // if no match it will jump to default
//         console.log('Unknown User');
// }

// refactored w if...else
// if (role === 'guest')
//     console.log('Guest');
// else if (role === 'moderator')
//     console.log('Moderator user');
// else 
//     console.log('Unknown User');



// For Loops

// variable is apart of loop
// repeat an action a number of times
// (1) let i = 0 (initialize expression);
// (2) i < 5 (condition being compared with variable and will run as long as true);
// (3) i++ will increment by 1 each time;
// print hello world 5x

// for (initialExpression; condition; incrementExpression){
//     statement (like if statement);
// }


// print odd numbers
// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0)
//     console.log(i);
// }

// print even numbers
// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 0)
//     console.log(i);
// }

// start at 5 and count down to one // Odd numbers in REVERSE order
// certain problems you may want to use for loops in reverse order
// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0)
//     console.log(i);
// }

// start at 10 and count down to two // Even numbers in REVERSE order
// for (i = 10; i >= 2; i--) {
//     if (i % 2 === 0)
//     console.log(i)
// }


// While loops

// you have to declare variable externally

// let i = 0;
// while(condition){
//     statement (could be if)
// }


// let i = 0;
// while (i <= 10) {
//     if (i % 2 !== 0)
//     console.log(i);
//     i++;
// }

// let i = 1;
// while (i <= 10) {
//     if (i % 2 === 0)
//     console.log(i);
//     i++;
// }


// do-while
// similar to while loops but slightly diff
// executed at least once bc while loop is at end
// will rarely use do while but good to know

// let i = 0;
// do {
//     if (i % 2 !== 0)
//     console.log(i);
//     i++;
// } while (i <= 5);


// Infinite loops
// executes infinitely or forever
// avoid them bc they can crash your browser or CPU

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     // i++           // don't forget to increment
// }

// while (true) {       // another example 
// }

// let x = 0;
// do {
//     //x++            // don't forget to increment
// } while (x < 5);

// for (let i = 0; i < 10; i++)     // don't forget to increment


// For in
// is used to iterate over properties of an object {} in key value pairs

// const person = {
//     name: 'James',
//     age: 27
// };

// Bracket Notation - when we do not know ahead of time what property what we are going to access

// for (let key in person)
// console.log(key, person[key]);


// For of 
// ideal way to iterate over elements or items in an array starting w ES6

// const colors = ['red', 'green', 'blue'];

// for (let color of colors)
//     console.log(color);



// Break and Continue
// break is used to jump out of a loop
// continue is used to continue with an iteration - ugly way of writing code something you want use often

// let i = 0;

// while (i <= 10) {
//     if (i === 5)
//     break;
//     console.log(i);
//     i++;
// }

// while (i <= 10)  {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }
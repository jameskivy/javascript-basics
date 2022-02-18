// two types of conditional statement
//if...else and switch...case

// if...else Example 

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

// let role = 'moderator'

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
// for (let i = 0; i < 5; i++) {
//     console.log('Hello World', i);
// }

// print odd numbers
// for (let i = 0; i < 20; i++) {
//     if (i % 2 !== 0)
//     console.log(i);
// }

// print even numbers
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0)
//     console.log(i);
// }

// start and 5 and count down to one // Odd numbers in REVERSE order
// certain problems you may want to use for loops in reverse order
// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0)
//     console.log(i);
// }


// While loop 
// you have to declare variable externally

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0)
//     console.log(i);
//     i++;
// }

// do while
// similar to while loops but slightly diff
// executed at least once bc while loop is at end
// will rarely use do while but good know

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
//     // i++
// }

// while (true) {
// }

// let x = 0;
// do {
//     //x++
// } while (x < 5);

// for (let i = 0; i < 10; )


// for in
// used to iterate over objects {} in key value pairs

// const person = {
//     name: 'James',
//     age: 27
// };

// for (let key in person)
// console.log(key, person[key]);

// Dot Notation 
// person.name

// Bracket Notation
// person['name']


// For of 
// ideal way to iterate over elements or item in an array starting w ES6

// const colors = ['red', 'green', 'blue'];

// for (let color of colors)
//     console.log(color);


// Break and Continue
// break is used to jump out of a loop
// continue is used to continue with an iteration

// let i = 0;

// while (i < 10)  {
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

/////////////////////////////////
// Exercises
/////////////////////////////////

// Write a function that takes two numbers and returns the maximum of the two.
// call that function and give a diff argument and make sure it's working properly

// let number = max(16, 10);
// console.log(number);

// function max(a, b) {
//     return (a > b) ? a : b;
// }

// Write a function that returns true if picture is landscape. If portrait return false.

// console.log(isLandscape(1000, 600));

// function isLandscape(width, height) {
//     return (width > height);
// }



// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'


// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;
    
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//     if (input % 3 === 0)
//         return 'Fizz';

//     if (input % 5 === 0)
//         return 'Buzz';

//     return input;
// }


// Speed Limit = 70
// 5 > 1 point
// Math.floor(1.3)
// 12 points -> suspended

// checkSpeed(130);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint)
//         console.log('Ok');
//     else {
//         let points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//             console.log('License suspended');
//         else
//         console.log('Points', points);
//     }
// }


// showNumbers(15);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//         console.log(i, message);
//     }
// }



const array = [0, null, undefined, '', 1]

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if (value)
    count++;
    return count;
}




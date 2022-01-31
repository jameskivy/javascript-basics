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

// let role = 'moderate user';

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

// if (role === 'guest')
//     console.log('Guest');
// else if (role === 'moderator')
//     console.log('Moderator user');
// else 
//     console.log('Unknown User');

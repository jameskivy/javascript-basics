// we use operators along with variables and const to create expressions and with expressions we can implement logic and algos

// types of operators 
// arithmetic, assignment, comparison, logical


// Arithmetic operators

// let x = 10;
// let y = 3;

// expression is something that produces a value
// console.log(x + y); // add          
// console.log(x - y); // subtraction
// console.log(x * y); // multiply     
// console.log(x / y); // division
// console.log(x % y); // remainder of division
// console.log(x ** y); // x to the power of y

// // Increment (++)
// console.log(x++);
// console.log(x);

// // Decrement (--)
// console.log(--y);


//// Assignment operators

// let x = 10;

// x = x + 5;
// x += 5;   // shorthand
// console.log(x)

// x = x * 3;
// x *= 3; // shorthand
// console.log(x)


// Comparison operators 

// let x = 1;

// //Relational operators
// console.log(x > 0); // greater than
// console.log(x >= 1); // greater than or equal to
// console.log(x < 1); // less than
// console.log(x <= 1); // less than or equal to

// // Equality operators
// console.log(x === 1); // equal
// console.log(x !== 1); // not equal


// Strict equality (compares type + value)
// console.log(1 === 1); // true both equals
// console.log('1' === 1); // false both have to match


// Lose Equality (compares value) - doesn't care about types matching
// right side will convert to what is on left side and will only check if values are equal
// left hand side value automatically converts right side to type on left
// console.log(1 == 1); // true
// console.log('1' == 1); // true
// console.log(true == 1); // true



/// Ternary Operators or Conditional Operator

// If a customer has more than 100 points they are a 'gold' customer, 
// otherwise they are a silver customer

// let points = 99;
// let type = points > 100 ? 'gold' : 'silver'; // condition, evaluates true if not use other

// console.log(type);
// silver


// Logical Operators - is used to make decisions based on multiple conditions
// logical and, or, & not


// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && true);
// console.log(true && false); // does not matter which side is false

// Example 
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);


// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// does not matter which side (can be let or right)

// Example
// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log(eligibleForLoan);


// Logical NOT (!)

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);


// Logical Operators with Non-booleans

// false || true             // True
// false || 'Mosh'           // 'Mosh'
// false || 1               // 1
// false || 1 || 2          // 1   -  //Short-circuiting - returns first truthy operand it finds

// Falsy values (false)     // not a boolean false
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy --> Truthy

// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor)  // print red


// let userColor = undefined;
// let defaultColor = 'green';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);   // print green (default color)


// Operators Precedence

// let x = 2 + 3 * 4;
// console.log(x);

// let y = (2 + 3) * 4
// console.log(y);


// Swapping variables exercise

// let a = 'red';
// let b = 'blue';
// console.log(a);
// console.log(b);
// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);
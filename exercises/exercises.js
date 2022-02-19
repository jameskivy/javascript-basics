////// Exercise # 1 ///////// Write a function that takes two numbers and returns the maximum of the two

// function max(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }

// let number = max(100, 30);
// console.log(number);



/////////// Exercise # 2 ////////////////////

// function isLandscape(width, height) {
//     return (width > height);
// }

// console.log(isLandscape(1600, 1000)) // true
// console.log(isLandscape(800, 1000)) // false



////// Exercise # 3 /////////////

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a number => 'Not a number'


// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//     return NaN;

//     if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//     if (input % 3 === 0) 
//     return 'Fizz';

//     if (input % 5 === 0)
//     return 'Buzz';

//     return input;
// }

// const output = fizzBuzz(50);
// console.log(output);



////////// Exercise # 4 : Check Speed ////////////







////////// Exercise # 5 : Even and Odd Numbers ////////////

// showNumbers(20);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i, message);
//     }
// }


////////// Exercise # 6 : Count Truthy ////////////

// const array = [1, 2, 3, 4, undefined, null, 0, false, 5, 6, 8, '', 9, 20];

// console.log(countTruthy(array))

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//     return count;
// }



////////// Exercise # 7 : String Properties ////////////

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string')  /// number to show numbers
//             console.log(key, obj[key]);
//     }
// }



////////// Exercise # 8 : Sum of Multiples of 3 and 5 ////////////

// console.log(sum(10))

// // Multiples of 3: 3, 6, 9
// // Multiples of 5: 5, 10

// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;
//         }

//     return sum;
// }



////////// Exercise # 9 : Grade of Students ////////////

const marks = [80, 80, 50];

// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks))

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) 
        return 'F';
    else if (average < 70) 
        return 'D';
    else if (average < 80) 
        return 'C';
    else if (average < 90) 
        return 'B'; 
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;

    for(let value of array)
        sum += value;
    return sum / array.length;
}



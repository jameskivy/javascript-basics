
//// Exercise 1 - Array from Range ////

// const numbers = arrayFromRange(5, 10);

// console.log(numbers);

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }


///////// Exercise 2 - Includes ///////

// const nums = [1, 2, 3, 4];

// console.log(includes(nums, 5));


// function includes(array, searchElement) {
//     for (let element of array)
//         if (element === searchElement)
//             return true;
//     return false;
// }


//// Exercise 3 - Except ////////

const numbers = [1, 2, 3, 4];

const output = except(numbers, [2, 1]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}


//// Exercise 4 - Includes ////////







//// Exercise 5 - Moving an Element ////////

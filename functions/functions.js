// Function Declarations vs Expression

// there are two ways to define a function 

// Function declaration 

walk();

function walk() {
    console.log('walk');
}


// Anonymous Function Expression
let run = function () {
    console.log('run');
};

let move = run;
run();
move();


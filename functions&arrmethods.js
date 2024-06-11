//Functions - block of code that performs specific action and can be invoked/called whenever needed
//Function definition - creating a function - function functionName() {..........}
function myFunction() {
    console.log("This is the first function");
    console.log("Many more to go");
}
//Function call - calling a function - functionName();
myFunction();

//Function definition using parameter - msg is parameter here
//parameters are written inside the function definition
function otherFunction(msg) { 
    console.log(msg);
}
//Function call using an argument - This is JavaScript is an argument
//arguments are written inside the function call
otherFunction("This is JavaScript"); 

//function definition with parameters - function myFunction(param1, param2, ..) { ..... }
//return statement - used to return the value and any code after return wont be executed
function sum(x, y) {
    //parameters here x and y are local variables with block scope means cant access these outside the function block
    s = x + y;
    console.log("Before return");
    return s;
    console.log("After return"); //wont give any output
}
let add = sum(5, 8);
console.log(add);


//Arrow Functions - Compact way of writing a function
//const functionName = (param1, param2, ...) => { ........ }
//regular function for sum of numbers
function sumFunction(a, b){
    return a + b;
}
//arrow function for above is
const arrowSum = (a, b) => {
    return a + b;
};

//reg function for multiplying the numbers
function mulFunction(a, b) {
    return a * b;
}
//arrow function for above is
const arrowMul = (a, b) => {
    //console.log( a * b );
    return a * b;
}


//Practice question 1 - count vowels in a string
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

//Practice question 2 - perform same using arrow function

const arrowCount = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}


//foreach loop in arrays - arr.forEach(callBackFunction)
//callBackFunction - is a function to execute for each element in the array
//A callback is a function passed as an argument to another function
let cityNames = ["Hyderabad", "Delhi", "Mumbai"];
//regular foreach function
cityNames.forEach(function city(val) {
    console.log(val);
});
//arrow foreach function
cityNames.forEach((val) => {
    console.log(val.toUpperCase());
});
//using the callback function - contains value, index, array itself
cityNames.forEach(function city(val , idx, cityNames) {
    console.log(val, idx, cityNames);
});
//Note - Higher order function - is a function uses other function as a parameter or returns another function as their output
//we can also say, if a function contains callback function, it can be called as higher order function or method

//practice question - print square of numbers using for each
let nums = [123, 456, 789];
nums.forEach(function num(val) {
    console.log(val*val);
} ); 
nums.forEach((num) => {
    console.log(num**2);
});
//using call back function
let digits = [2, 5, 6];
let digSquare = (digit) => {
    console.log(digit**2);
};
digits.forEach(digSquare);

//Some more Array Methods
//Maps - Creates a new array with the results of some operation. The value its callback returns are used to form new array
//arr.map( callbackFnx( value, index, array ) ) - similar to foreach but this map create an array as a output
let numM = [2,3,4,5];
let newNum = numM.map((val) => {
    return val**3;
});
console.log(numM, newNum);

//Filter - creates a new array of elements that give true for a condition/filter. Eg: all even elements
//arr.filter()
let numerics = [1,2,3,4,5,6];
let justEven = numerics.filter((val) => {
    return val % 2 === 0;
})
console.log(`From numerics the even numbers are ${justEven}`);

//Reduce - performs some operations and reduces the array to a single value. It returns that single value
//arr.reduce()
let arr = [1,2,3,4,5];
const output = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(output);


//practice question 1 - filter the marks of students scored 90+
let marks = [87, 92, 98, 89, 78, 90];

let marksA = marks.filter((mark) =>{
    return mark > 90;
});
console.log(`Out of the marks, marks with 90+ are ${marksA}`);

//practice question 2
let n = prompt("Enter a number:");
let arrn = [];
for (let i=1; i<=n; i++) {
    arrn[i-1] = i;
}
console.log(arrn);
//sum of the numbers
const result1 = arrn.reduce((res, curr) => {
    return res + curr;
});
console.log(result1);
//product of the numbers
const result2 = arrn.reduce((res, curr) => {
    return res * curr;
});
console.log(result2);
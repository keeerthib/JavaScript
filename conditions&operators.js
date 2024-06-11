// Arithmetic Operators ( + , - , * , / , % , ** , ++ , --)
let a = 5;
let b = 3;

console.log("a = ", a , " & b = ", b);

console.log("a + b =", a + b);      //Addition
console.log("a - b =", a - b);      //Subtraction  
console.log("a * b =", a * b);      //Multiplication
console.log("a / b =", a / b);      //Division
console.log("a % b =", a % b);      //Modulus
console.log("a ** b =", a ** b);    //Exponential 
console.log("a =", ++a);            //Pre Increment
console.log("b =", b--);            //Post Decrement

//Assignment Operators ( = , += , -= , *= , %= , **=)
let z = 4;
let y = 2;

console.log("z =", z);

z += 2;     //z = z + 2
y -= 2;     //y = y - 2
console.log("z =", z); 
console.log("y =", y); 


//Comparison Operators ( == , != , === , !== , <= , < , >= , >)
let c = 5;      //value is number
let d = "2";    //value is string

console.log("5 == 2 is ", c == d);      //equal to
console.log("5 != 2 is ", c != d);      //not equal to
console.log("5 === 2 is ", c === d);    //equal and checks datatype as well
console.log("5 !== 2 is ", c !== d);    //not equal and checks datatype as well
console.log("5 < 2 is ", c < d);        //less than
console.log("5 <= 2 is ", c <= d);       //less than or equal to
console.log("5 > 2 is ", c > d);        //greater than
console.log("5 >= 2 is ", c >= d);       //greater than or equal to

//Logical Operators ( && , || , !)
let e = 5;
let f = 1;

console.log("e = ", e , " & f = ", f);
console.log("e > f && e === 4 is ", e > f && e === 4);
console.log("e > f || e === 4 is ", e > f || e === 4);
console.log("!( 5 > 1 ) is", !( 5 > 1 ));


//Conditional Statements - if statement
//Example 1
let age = 16;

if (age >= 18) {
    console.log("You CAN vote");
}

if (age < 18) {
    console.log("You CANNOT vote");
}

//Example 2
let mode = "light";
let color;

if (mode === "dark") {
    color = "Black";
}

if (mode === "light") {
    color = "white";
}
console.log("Background color is", color);

//Conditional Statements - if else statement
//Example 1
let marks = 60;

if (marks >= 89) {
    student = "Distinction";
} else {
    student = "Pass";
}
console.log("student got", student);

//Example 2
let num = 3;

if (num % 2 === 0) {
    console.log(num, "is Even");
} else {
    console.log(num, "is Odd");
}


//Conditional Statements - else if statement
//Example 1
let score = 40;

if (score >= 90) {
    console.log("Grade A with ", score);
} else if (score >= 80) {
    console.log("Grade B with ", score);
} else if (score >= 70) {
    console.log("Grade C with ", score);
} else if (score >= 60) {
    console.log("Grade D with ", score);
} else {
    console.log("Fail with", score);
}



//Ternery Operators (condition ? true output : false output;)
let studentAge = 18;

let criteria = studentAge > 20 ? "Eligible to Vote" : "Not eligible to Vote";
console.log("Candidate is ", criteria);

//Practice 1
let number = prompt("Enter a number");
//console.log("Number is", number);

if (number % 5 === 0) {
    console.log(number, "is multiple of 5");
} else {
    console.log(number, "is not multiple of 5");
}

//Practice 2
let sPoints = 30;
let sGrade;

if (sPoints >= 90 && sPoints <= 100) {
    sGrade = "A";
} else if (sPoints >= 80 && sPoints <= 89) {
    sGrade = "B";
} else if (sPoints >= 70 && sPoints <= 79) {
    sGrade = "C";
} else if (sPoints >= 60 && sPoints <= 69) {
    sGrade = "D";
} else if (sPoints >= 50 && sPoints <= 59) {
    sGrade = "E";
} else if (sPoints >= 0 && sPoints <= 49) {
    sGrade = "F";
}

console.log("Students with points", sPoints, "secured Grade -", sGrade);


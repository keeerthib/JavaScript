
//console.log("Hi! I'm Keerthi");


/*  //Datatypes - Primitive
fullName = "Keerthi Reddy"; //string
age = 24;                   //number
marks = 95.50;              //number
a = null;                   //null
x = undefined;              //undefined
isFollow = true;            //boolean

console.log(isFollow);
*/

// Variable names are case sensitive meaning fullName and FULLNAME are two different variables
// only letters, digits, $, underscore are allowed and no space or special char are not allowed
// first character of variable name can be letter, $, and _ 
// reserved words cannot be variable names

// var : can be redeclared and updated. Global scope
// let : cannot be redeclared but can be updated. Block scope
// const : cannot be redeclared or updated. Block scope

/* // school is the object here with set of variables having key:value pair
const school = {
    studentName : "Keerthi",
    studentAge : 19,
    studentMarks : 98,
    isPass : true,
};

//school.studentAge = school.studentAge + 1;
school["studentAge"] = school["studentAge"] + 3;
console.log(school.studentAge);
 
*/


//Practice question 1
const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
};

console.log(product);


//Practice question 2
const profile = {
    pName : "Keerthi_Reddy",
    isOfficial : true,
    posts : 195,
    followers : 569000,
    following : 4,
    bio : "A+ | Exhale the bullshit",
};

console.log(profile);

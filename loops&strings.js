//Loops - for(let i=1; i<=5; i++) means i=1 is initialization, i<=10 is stopping condition, i++ is updation
//1 - print executed 10 times
for(let i=1; i<=10; i++) {
    console.log("Executed");
}

//2 - print the sum of 1-10 digits
let sum = 0;
for (let i=1; i<=10; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);
console.log("Out of Loop");

//3 - print the even numbers between 1-10
for (let n=1; n<=10; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}

//Loops - while(condition) 
//1 - print odd numbers from 1 - 10
let num = 1;
while (num <= 10) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

//2 - print numbers from 1 - 5
let x=1;
while(x<=5) {
    console.log("x =", x);
    x++;
}

//Loops - do - while - do { } while (condition);
//1 - print numbers from 1 - 5
let y = 1;
do {
    console.log("y =", y);
    y++;
} while (y<=5);

//2 - print prime numbers from 1 - 10
let z = 1;
do {
    if (isPrime(z)) {
        console.log(z);
    }
    z++;
} while (z <= 10);

function isPrime(z) {
    if (z <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(z); i++) {
        if (z % i === 0) {
            return false;
        }
    }
    return true;
}

//Loops - for - of loop - for (let val of strvar) { } - returns value of the key:value pair
// we use this for strings and arrays- no need of initializing, condition or updation
//1 - printing the characters from the string
let fullName = "Keerthi Reddy";
for (let val of fullName) {
    console.log("val of name is", val);
}

//2 - print string size
let word = "GetLost";
let size = 0;
for (let val of word) {
    size++;
}
console.log("size of word is ", size);

//Loops - for - in loop - for (let key in objVar) { } - returns keys of the key:value pair
// we use this for objects and arrays- no need of initializing, condition or updation
//1 - print the key and value of the variable
let student = {
    sName : "Keerthi",
    sAge : 24,
    sGPA : 4,
};
for (let key in student) {
    console.log("student - Key is", key, "and Value is", student[key]);
}


//Practice question 1 - print even numbers from 0 - 20
for (i = 0; i<=20; i++) {
    if (i % 2 === 0) {
        console.log(i,"is even number");
    }
}

//Practice question 2 - create a game number asking user to guess
// let gameNum = 10;
// let userNum = prompt("Guess the Game Number from 1-10: ");

// while (userNum != gameNum) {
//     userNum = prompt("Your guess is wrong. Guess Again:");
// }

// console.log("You guessed it right. The Game Number is:", gameNum);


//Strings - are immutable means cant change the og string - can use " " or ' ' marks. 
let string1 = "Keerthi";
let string2 = 'Reddy';
let string = string1 + string2;
console.log("Combination of string 1 and 2 is", string);

//string length - str.length
console.log("Length of output string is:", string.length);

//string indices - the index of string starts from 0 and can be defined as str[0], str[1].....
console.log("The letter of the index 5 is", string[5]);


//Template Literals - embed expressions in strings
let specialString = `Used the backticks to define literals`;
console.log(specialString);

//String interpolation 
let product = {
    item : "book",
    price : 50,
    type : "Notebook",
}
console.log("The item is", product.item, ", price is", product.price, "and the type of the book is", product.type);
//String interpolation - instead of typing the variable key and all we can use literal as below
//`string text ${expression} string text`
let productDes = `The item is ${product.item} ,price is ${product.price} and the type of book is ${product.type}.`;
console.log(productDes);

//String Methods
//str.toUpperCase() - changes the string to uppercase letters
let str1 = "Helooooooo";
strUC = str1.toUpperCase();
console.log(strUC);

//str.toLowerCase() - changes the string to lowercase letters
strLC = str1.toLowerCase();
console.log(strLC);

//str.trim() - removes the whitespaces at start and end of the string
let strtoTrim = "   Hey you         ";
strT = strtoTrim.trim();
console.log(strT);

//str.slice(start, end) - returns the part of string as specified in start and end as index
let strSlice = "JavaScript";
strS = strSlice.slice(3,6); //o/p is aSc because index 6 wont print because it is end
console.log(strS);

//str.concat(str1) - concats/joins two different strings
let strx = "teddy";
let stry = "bear";
let res = strx.concat(stry);
console.log(res);

//str.replace(searchVal, newVal) 
let strRep = "India is my country country country";
console.log(strRep.replace("country", "love"));
//str.replaceAll(searchVal, newVal)
console.log(strRep.replaceAll("country","love"));

//str.charAt(idx) - to find the character at given index
let strC = "JavaS";
console.log(strC.charAt(4));


//Practice question 1
let userFullname = prompt("Enter your full name without space:");
let userName = "@" + userFullname + userFullname.length;
console.log("Full Name is", userFullname);
console.log("User Name is", userName);

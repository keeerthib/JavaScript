//Arrays - collection of items - mutable means can be changed/updated using the index
let studName = ["Keerthi", "Laxmi", "Chiru", "Pooja"];
let studAge = [24, 25, 25, 26];
console.log(studName);
console.log(studAge);

//Array indices - arr[0], arr[1], ...
console.log(studAge[2]);
console.log(studName[1]);

//for loop in arrays - for(idx=0; idx<arr.length; idx++)
for (i=0; i<studName.length; i++)
    {
        console.log(studName[i]);
    }

//for-of loop in array - for(let val of arr) 
let cities = ["hyderabad", "kurnool", "cincinnati", "columbus"];
for (let city of cities) {
    console.log(city.toUpperCase());
}

//Practice question 1 - finding the average of marks
let studMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let marks of studMarks) {
    sum += marks;  //sum = sum + marks;
}
let avg = sum / studMarks.length;
console.log(`The average marks of all the students is ${avg}`);

//Practice question 2 - 
let price = [250, 645, 300, 900, 50];
// for (let val of price) {
//     let offer = val / 10;
//     price[i] = price[i] - offer;
//     console.log(`The final price after discount 10% is ${price[i]}`);
// }

for (let i=0; i<price.length; i++) {
    let offer = price[i] / 10;
    price[i] -= offer;
}

console.log(`The final price after discount is ${price}`);


//Array Methods
//push() - adds the element mentioned at the end of the array
let veggies = ["tomato", "potato", "beans", "bellpeppers"];
veggies.push("garlic", "carrot");
console.log(veggies);

//pop() - deletes an element at the end of an array
let deletedVeggie = veggies.pop();
console.log("The deleted veggie is", deletedVeggie);
console.log(veggies);

//toString() - convert an array to string & returns result
console.log(veggies.toString());

//concat() - joins multiple arrays & returns result
let fruits = ["apple", "mango", "banana"];
let conc = veggies.concat(fruits);
console.log(conc);

//unshift() - add to start of an array
veggies.unshift("cucumber");
console.log(veggies);

//shift() - delete from start and return the result
veggies.shift();
console.log(veggies);

//slice() - returns a piece of an array - slice( startIdx, endIdx )
let sveggies = veggies.slice(2,5);
console.log(sveggies);

//splice() - change original array (add, remove, replace) - splice( startIdx, delCount, newEl1... )
let spVeggies = veggies.splice(2, 2, "ginger", "paste");
console.log(spVeggies);
console.log(veggies);
//splice() - add element
let aveggies = veggies.splice(2, 0, "pudhina");
console.log(veggies);
//splice() - delete element
let dveggies = veggies.splice(3, 1);
console.log(veggies);
//splice() - replace element
let rveggies = veggies.splice(1, 1, "kakarkay");
console.log(veggies);


//Practice Question 1
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//remove first company
let compRemove = companies.shift();
console.log(`The removed company is ${compRemove} from ${companies}`);

//remove uber and replace ola with it
let rideComp = companies.splice(1, 1, "Ola");
console.log(`After replacing uber with ola is ${companies}`);

//add amazon at end
let addComp = companies.push("Amazon");
console.log(`After adding amazon the companies are ${companies}`);
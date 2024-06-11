//To know about DOM - lets quickly dive into html and css
//HTML - used to structure the webpage
//CSS - used to style the webpage
//JavaScript - used to perform the actions/ logic
//to link the html with css we use <style> tag or <link rel="stylesheet" href="style.css" /> - in head 
//to link the html with js we use <script> tag or <script src="script.js"></script> -in body   

//DOM - Document object model - whenever a webpage is loaded, then browser automatically creates a DOM of the page
//DOM is a programming interface for web documents that represents structure of a HTML/XML document as a tree of objects
//Each node in the DOM tree represents a part of the document, enabling JavaScript to dynamically interact with
//and manipulate the document's content, structure, and styles.

//DOM Manipulation - accessing elements by
//with ID -               document.getElementById("myId");                      -can use # for css
//with class name-        document.getElementsByClassName("myClass");           -can use . for css
//with tag -              document.getElementsByTagName("p");
//Query Selector
//document.querySelector("#myId / .myClass / tag")          - returns first element which is specified
//document.querySelectorAll("#myId / .myClass / tag")       - returns a node list which is specified

//DOM - Properties 
//Nodes are of three types - text node, comment node, and element node
//tagName       -   returns tag for element nodes
//innerText     -   returns the text content of the element and all its children
//innerHTML     -   returns the plain text or HTML contents in the elements
//textContent   - returns textual content even for the hidden elements

//practice question 1
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "From Keerthi Reddy";
console.dir(h2.innerText);

let boxes = document.querySelectorAll(".box");
idx = 1;
for (box of boxes) {
    box.innerText = `Updated box ${idx}`;
    idx++;
}


//DOM - Attributes
//getAttribute(attr)            - to get the attribute value
let id = h2.getAttribute("id");
console.log(id);
let div = document.querySelector("div");
console.log(div.getAttribute("class"));

//setAttribute(attr, value)     - to set the attribute value
// let idd = h2.setAttribute("id", "idd");
// console.log(idd);
// let div2 = document.querySelector("div");
// console.log(div.setAttribute("class", "class2"));

//classList()       - to add or remove class
//div.classList.add("newClass");
//div.classList.remove("class");


//style - node.style - div.style.fontSize = "26px";   or div.style.backgroundColor = "blue";

//insert elements - to insert any element, create an element first and then insert that element
//node.append(element)  - adds at the end of the node (inside)
let button = document.createElement("button");
button.innerText = "Click Me!!";
console.log(button);
let div2 = document.querySelector("div");
div2.append(button);

//node.prepend(element) - adds at the start of the node (inside)
let para = document.createElement("p");
para.innerText = "This is where the boxes starts!!";
console.log(para);
let div3 = document.querySelector("div");
div3.prepend(para);

//node.before(element)  - adds before the node (outside)
let div4 = document.querySelector("div");
div4.before(para);

//node.after(element)   - adds after the node (outside)
let para2 = document.createElement("p");
para2.innerText = "This is where the boxes ends!!";
console.log(para2);
let div5 = document.querySelector("div");
div5.after(para2);


//delete element - node.remove(element)     - removes the node
//Node.remove(p);


//Practice question - create button with text click me and style some
let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!!";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
document.querySelector("body").prepend(newbtn);
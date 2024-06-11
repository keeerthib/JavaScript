//Events - are actions or occurrences that happen in the browser, they can be detected and handled to perform specific tasks
//example - user actions like clicks, key presses, & mouse movements, also other occurrences such as page load & element focus
//mouse events - (click, double click, hover, etc)
//keyboard events - (leypress, keyup, keydown, etc)
//form events (submit), print events, & many more

//Event handling - node.event = () => { //handle here }
//example - btn.onclick = () => { console.log("button was clicked"); }

let btn1 = document.querySelector(".button1");
btn1.onclick = () => {
    console.log("Submitted!!");
};

let eventss = document.querySelector("#eventss");
eventss.onmouseover = () => {
    console.log("mouse is hoverd!!");
};

//note1: creating an event using js has more priority than compared to inline event handling.
//note2: creating two different events for same node could over write the first event and performs second event

//event object - It is a special object that has details of event. all event handlers have access to the event object's properties and methods
//example - node.event = (e) => { //handle here } - e.target, e.type, e.clientX, e.clientY

let p = document.querySelector("p");
p.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
};


//event listeners 
//node.addEventListener(event, callback)

let btn = document.querySelector("#btn");
//one way to create event listener
btn.addEventListener("click", () => {
    console.log("button is clicked - handler1");
});
btn.addEventListener("click", () => {
    console.log("button is clicked - handler2");
});
//another way to create event listener
const handler3 = () => {
    console.log("button is clicked - handler3");
};
btn.addEventListener("click", handler3);
const handler4 = () => {
    console.log("button is clicked - handler4");
};
btn.addEventListener("click", handler4);

//node.removeEventListener(event, callback) - note:the callback reference should be same to remove
//here we are removing handler 4 - while removing an event listener, make sure that the callback reference is same
//means at first way the functions are different hence the memory would be different but
//in the second way assigning the event listener to a variable makes it store in the same memory
btn.removeEventListener("click", handler4);


//practice question - make toggle button with dark and light mode
let btnMode = document.querySelector("#mode");
let currMode = "light";

btnMode.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});
const sentence = [
  "JavaScript is a light-weight object-oriented programming language which is used by several websites for scripting the webpages.",

  "It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. ",

  "It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser.",

  "Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time.",

  "The traditional website uses js to provide several forms of interactivity and simplicity.",

  "Although, JavaScript has no connectivity with Java programming language. The name was suggested and provided in the times when Java was gaining popularity in the market. ",

  "In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript as their scripting and query language.",

  "JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!",

  "JavaScript is one of the most popular modern web technologies! As your JavaScript skills grow, your websites will enter a new dimension of power and creativity.",

  "Variables are containers that store values. You start by declaring a variable with the var  or the let keyword, followed by the name you give to the variable",

  "Functions are a way of packaging functionality that you wish to reuse. It's possible to define a body of code as a function that executes when you call the function name in your code.",

  "This is the shortest sentence. ",

  "The most obvious example is handling the click event, which is fired by the browser when you click on something with your mouse. ",

  "Next, let's change the page title to a personalized welcome message when the user first visits the site. This welcome message will persist. Should the user leave the site and return later",

  "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",

  "JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications.",
]; //Array of strings

let num = Math.floor(Math.random() * 16); //Random number generate
var words = sentence[num].split(" "); //Splitting string in array

var txt = document.getElementById("text");
txt.innerText = sentence[num];
var bx = document.getElementById("box");
var modTxt = "",
  str,
  index = 0,
  total = words.length,
  count = 0,
  timecheck = true;


txt.innerHTML = `<span style = "color: #224ce3;">${words[0]}</span>`; //0th index element will show
for (let i = 1; i < words.length; i++) {
  txt.innerHTML += " " + words[i];
}


//Typing
bx.addEventListener("keydown", (e) => {

  if (index != words.length && e.key == " ") {
    str = bx.value.trim(); //str takes userinput
    bx.value = ""; //Flush input

    for (let i = 0; i < index; i++) {
      txt.innerHTML += " " + words[i]; //Before current word
    }

    // CSS on current words
    if (words[index] == str) {
      modTxt += " " + `<span style = "color: #10916b;">${words[index]}</span>`;
      count++;
    } else {
      modTxt += " " + `<span style = "color: #d42424;">${words[index]}</span>`;
    }
    index++; //Index increment

    txt.innerHTML = modTxt; //Current formatted value will add
    if (words[index] != undefined) {
      //Next to the current word will blue
      txt.innerHTML +=
        " " + `<span style = "color: #224ce3;">${words[index]}</span>`;
    }
    for (let i = index + 1; i < words.length; i++) {
      txt.innerHTML += " " + words[i]; //Words after index
    }
  }
  if (index == total) {
   result();  
   stop();
   bx.disabled = true;
  }
});

//Timer
bx.addEventListener('click', () => {
    min.value = 00;
    sec.value = 00;
    
    interval_ID = setInterval(() => {
      if(sec.value != 59 && min.value != 1) {
        sec.value = parseInt(sec.value) + 1;
      }
      else if(sec.value == 59) {
        min.value = 1;
        sec.value = 0;
        result();
      }
    }, 1000)
})

//Timer declarations
var min = document.getElementById('min');
var sec = document.getElementById('sec');

var interval_ID;

var stop = () => {
  clearInterval(interval_ID);
}

//RESULT
var result = () => {
  let tt = (parseInt(min.value)*60)+parseInt(sec.value);
  txt.innerHTML = "";
  txt.innerHTML = (`<span style = "color: #224ce3;font-weight: 100; display: block; font-size: 30px;">Total words -> ${total}</span>
  <span style = "color: #10916b;font-weight: 100; display: block; font-size: 30px;">Correct words -> ${count}</span>
  <span style = "color: #d42424;font-weight: 100; display: block; font-size: 30px;">Wrong words -> ${index-count}</span>
  <span style = "color: #f2b138;font-weight: 100; display: block; font-size: 30px;">Typing Speed -> ${Math.floor((index/tt)*60)}wpm</span>`);
}

// Resolution script
let res = document.getElementById("res");
res.innerText = window.innerWidth + " * " + window.innerHeight;
window.addEventListener("resize", () => {
  res.innerText = window.innerWidth + " * " + window.innerHeight;
});

//Refresh after clicking on next
function refresh() {
  location.reload();
  bx.disabled = false;
}
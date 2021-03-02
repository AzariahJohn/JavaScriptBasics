var clickMe = document.getElementById("click-me");
var reset = document.getElementById("reset");
var result = document.getElementById("result");
clickMe.onclick = inputs;
reset.onclick = rst;

function inputs() {
    let age = prompt("What's your age ?")
    age = parseInt(age)
    if(Number.isInteger(age)){
        let days = age * 365;
        result.innerHTML = "You're " + days + " Days old";
    } 
    else{
        result.innerHTML = "Enter proper age"
    }
    console.log(Number.isInteger(age))
}

function rst() {
    result.innerHTML = " ";
}


// CALCULATOR

var value = 0;
let display = document.getElementById("display");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let add = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let cancel = document.getElementById("can");

one.onclick = function(){
    display.innerHTML += "1";
    value += "1";
}

two.onclick = function(){
    display.innerHTML += "2";
    value += "2";
}

three.onclick = function(){
    display.innerHTML += "3";
    value += "3";
}

four.onclick = function(){
    display.innerHTML += "4";
    value += "4";
}

five.onclick = function(){
    display.innerHTML += "5";
    value += "5";
}

six.onclick = function(){
    display.innerHTML += "6";
    value += "6";
}

seven.onclick = function(){
    display.innerHTML += "7";
    value += "7";
}

eight.onclick = function(){
    display.innerHTML += "8";
    value += "8";
}

nine.onclick = function(){
    display.innerHTML += "9";
    value += "9";
}

zero.onclick = function(){
    display.innerHTML += "0";
    value += "0";
}

add.onclick = function(){
    display.innerHTML += "+";
    value += "+";
}

minus.onclick = function(){
    display.innerHTML += "-";
    value += "-";
}

multiply.onclick = function(){
    display.innerHTML += "x";
    value += "*";
}

divide.onclick = function(){
    display.innerHTML += "/";
    value += "/";
}

dot.onclick = function(){
    display.innerHTML += ".";
    value += ".";
}

equal.onclick = function(){
    display.innerHTML = eval(value);
    let temp = eval(value);
    value = temp.toString();
}

clear.onclick = function(){
    display.innerHTML = "";
    value = 0;
}

cancel.onclick = function(){  
    console.log()
    value = value.slice(0,-1)
    if (value[0] == "0") {
        value = value.substring(1);
    }
    else {
        display.innerHTML = value;
    }
}


// Rock Paper Cisor


let myDisp = document.getElementById("my-disp");
let oppDisp = document.getElementById("opp-disp");
let winner = document.getElementById("win-txt");

// buttons

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let cisor = document.getElementById("cisor");

let val = 0;

rock.onclick = function() {
    myDisp.innerHTML = '<img src="stone.svg" alt="" class="rps">';
    val = 1;
    bot();
}

paper.onclick = function() {
    myDisp.innerHTML = '<img src="paper.svg" alt="" class="rps">';
    val = 2;
    bot();
}

cisor.onclick = function() {
    myDisp.innerHTML = '<img src="cisor.svg" alt="" class="rps">';
    val = 3;
    bot();
}

let ran;

function bot() {
    ran = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if(ran == 1){
        oppDisp.innerHTML = '<img src="stone.svg" alt="" class="rps">';
    }
    else if(ran == 2){
        oppDisp.innerHTML = '<img src="paper.svg" alt="" class="rps">';
    }
    else if(ran == 3){
        oppDisp.innerHTML = '<img src="cisor.svg" alt="" class="rps">';
    }
    else{
        console.log(ran);
    }


    if (val == ran){
        winner.innerHTML = '<h1 class="f-txt">DRAW</h1>';
    }

    else if(val == 1 && ran == 2){
        winner.innerHTML = '<h1 class="f-txt">BOT WINS</h1>';
    }

    else if(val == 1 && ran == 3){
        winner.innerHTML = '<h1 class="f-txt">YOU WIN</h1>';
    }

    else if(val == 2 && ran == 1){
        winner.innerHTML = '<h1 class="f-txt">YOU WIN</h1>';
    }

    else if(val == 2 && ran == 3){
        winner.innerHTML = '<h1 class="f-txt">BOT WINS</h1>';
    }

    else if(val == 3 && ran == 1){
        winner.innerHTML = '<h1 class="f-txt">BOT WINS</h1>';
    }

    else if(val == 3 && ran == 2){
        winner.innerHTML = '<h1 class="f-txt">YOU WIN</h1>';
    }
    else{
        console.log(val);
        console.log(ran)
    }
}
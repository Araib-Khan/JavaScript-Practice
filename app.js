// Chapter number 9 

var specie = prompt("Your Specie ?", "human");
var question = "Your Species ?";
var defaultAnswer = "human";
var specie = prompt(question, defaultAnswer);
console.log(specie); 

var Cats = +prompt("How many cats?");
var tooManyCats = Cats + 1;
console.log(tooManyCats);

// Chapter number 10

var x = prompt("What is the Full form of JS?");
if (x === "Javascript") {
console.log("Correct!");
}

var correctAnswer ="Vatican";
var x = "Vatican";
if (x === correctAnswer) {
console.log("Correct!");
}

var correctAnswer = "Vatican";
var x = "Vatican";
var score=12;
if (x === correctAnswer) {
    console.log("Correct!");
    score++;
    console.log(score);
    userIQ = "genius";
    console.log(userIQ);
}

// Chapter number 11

var fullName = "Mark Myers";
if (fullName === "Mark" + " " + "Myers") {
    console.log("correct");
}

fullName= "D Miller";
firstName = "D";
if (fullName === firstName + " " + "Miller") {
    console.log("Correct");
}

var fullName = "Araib Khan";
if (fullName === "Araib" + " " + "Khan") {
    console.log("Correct");
}

var totalCost=220;
if (totalCost === 200 + 20) {
    console.log("Correct");
}

totalCost=155;
materialsCost=20;
if (totalCost === materialsCost + 135) {
    console.log("Total cost : "+totalCost);
}
totalCost=300;
materialsCost=200;
laborCost=100;
if (totalCost === materialsCost + laborCost) {
    console.log("Correct");
}

var x=2;
var y=2;
var a=6;
var b=2;
if (x + y === a - b) {
    console.log("x + y equal to a - b");
}
     
var yourTicketNumber=32535;
if (yourTicketNumber !== 487208) {
    alert("Better luck next time.");
}

var a=1;
var b=0;
if (a > b) {
    console.log("Correct");
}

var c=0;
var d=1;
if (c < d) {
    console.log("c less then d");
}    

var e = 0;
var f=0;
if (e >= f) {
    console.log("Correct");
}    

var g=2;
var h=1;
if (g >= h) {
    console.log("Correct");
}       

var i = 1;
var j = 1; 
if (i <= j) {
    console.log("Correct");
}

var k= 0;
var l =2;
if (k <= l) {
    console.log("Correct");
}
     
// Chapter number 12 

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
}  

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
}
if (x !== "Vatican") {
    alert("Wrong answer");
}

var x = prompt("Where does the Pope live?");
if (x === "Vatican") 
{
    alert("Correct!");
    }
    else {
    alert("Wrong answer");
}
     
var correctAnswer = "Vatican";
var x = "Pakistan";
var score =1;
if (x === correctAnswer) {
    alert("Correct!");
}
else {
score--;
userIQ = "problematic";
    alert("Incorrect");
    alert(userIQ);
    alert(score);
}

var correctAnswer = "Vatican";
var x = "Rome";
if (x === correctAnswer) {
    alert("Correct!");
}
else if (x === "Rome") {
    alert("Incorrect but close");
}
else {
    alert("Incorrect");
}

// Chapter number 13

var weight = 310;
var time = 5;
if (weight > 300 && time < 6) {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}

var weight= 320;
var time = 5;
var age = 19;
gender = "female";
if (weight > 300 && time < 6 && age > 18 && gender === "male") 
{
    alert("Come to our tryout!");
    }
    else {
    alert("Come to our cookout!");
}
     
var SAT = 100;
var avg = 50;
var GPA = 2.0;
var sport = "football";
if (SAT > avg || GPA > 3.0 || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}

var age = 66;
var res = "U.S.";
if (age > 65 || age < 21 && res === "U.S.") {
    alert("Correct");
}

var age = 20;
var res = "U.S.";
if ((age <21 || age > 65) && res === "U.S.") {
    alert("Correct");
}

var age = 25;
var res = "U.S.";
if (age > 65 || (age < 21 && res === "U.S.")) {
    alert("Ok");
}

// Chapter number 14    

var x = 1;
var y =1;
var a = 2;
var b = 3;
var c = 2;
var d = 3;
var g = 40;
var h = 40;
var e = 45;
var f = 45;
if ((x === y || a === b) && c === d) {
g = h;
    alert(h);
}
else {
e = f;
    alert(f);
}     

var c = 1;
var d = 1;
var x = 2;
var y = 4;
var a = 3;
var b = 5;
if (c === d) {
    if (x === y) {
alert(" c equal to d and x equal to y");
    }
    else if (a === b) {
alert("a equal to b");
}
else {
alert("only c equal to d");
    }
    }
    else {
    alert("c is not equal to d");
}
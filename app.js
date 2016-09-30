//grab figletText.js file in the same location and run it
var test = require('./figletText.js');

function Checking(firstName,lastName, amount){  //creating objects in javascript/nodejs
  this.firstName = firstName;
  this.lastName = lastName;
  this.amount = amount;
}

Checking.prototype.greet = function () { //can create a method that works for all prototype objects of "Checking"
  console.log(this.firstName + " " + this.lastName);
};

var mike = new Checking("Mike", "Smith", 500); //create a checking object of mike, similar to java


console.log("Hello " +  mike.firstName + " you currently have " + mike.amount);

mike.greet(); 

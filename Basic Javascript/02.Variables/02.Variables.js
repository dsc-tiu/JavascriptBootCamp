// HOISTING IN JAVASCRIPT
// ---------------------------------------------------------------------------------
// * Differnce Between Var and let

//! var is function scoped

// variable a cannot be used here
function greet() {
  // variable a can be used here
  var a = 'hello';
  console.log(a);
}
// variable a cannot be used here

greet();

// OR

function greet() {
  let a = 'hello';

  // variable b can be used here but will be undefined
  console.log(b);
  if (a == 'hello') {
    // variable b can be used here
    var b = 'world';
    console.log(a + ' ' + b);
  }

  // variable b can be used here
  console.log(a + ' ' + b);
}

greet();

// In the above program, the variable a is declared with var. The variable a can be used anywhere inside the function greet.

//! let is block-scoped

function greet() {
  let a = 'hello';

  // variable b cannot be used here
  if (a == 'hello') {
    // variable b can be used here
    let b = 'world';
    console.log(a + ' ' + b);
  }

  // variable b cannot be used here
  console.log(a + ' ' + b); // error
}

greet();

// Output
/*
hello world
Uncaught ReferenceError: b is not defined
*/

// ! let doesn't allow to redeclare Variables
//? 1. A variable declared with var can be redeclared again. For example,

var a = 5; // 5
var a = 3; // 3

//? A variable declared with let cannot be redeclared within the same block or same scope. For example,

let a = 5;
let a = 3; // error

//? 2. Redeclaring a variable with var in a different scope or block changes the value of the outer variable too. For example,
var a = 5;
console.log('before the block', a); // 5
{
  var a = 3;
  console.log('in the block', a); // 3
}
console.log('after the block', a); // 3

//? Redeclaring a variable with let in a different scope or block treats that variable as a different variable. And the value of a variable outside does not change. For example,

let a = 5;
console.log('before the block', a); // 5
{
  let a = 3;
  console.log('in the block', a); // 3
}
console.log('after the block', a); // 5

//! let Doesn't Allow Hoisting
//? Shown Later

// ---------------------------------------------------------------------------------
// Global and Local Variables
var data = 200; // global variable

function first() {
  var localData = 400;

  console.log(data);
  console.log(localData);
}

function second() {
  console.log(data);
  console.log(localData); // Will give error saying 'localData not defined'
}

first(); //calling JavaScript function

second();

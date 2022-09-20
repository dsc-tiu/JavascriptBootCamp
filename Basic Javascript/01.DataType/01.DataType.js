// STRINGS IN JAVASCRIPT : Create  Concate, Compare
// ---------------------------------------------------------------------------------
// String is a primitive data type in JavaScript. A string is textual content. It must be enclosed in single or double quotation marks.

// Example :

var str1 = 'This is a string with single quotes';
var str2 = "This is a string with double quotes";

// Strings can also be treated as 0 based character arrays
var str3 = "Character Array"
for (let i in str3)
    console.log(str3[i])

// Different methods to access strings as arrays

for (let i = 0; i < str3.length; i++)
    console.log(str3[i])

for (let i of str3)
    console.log(i)

// ---------------------------------------------------------------------------------
// Concatenation
// A string is immutable in JavaScript, it can be concatenated using plus(+) operator in JavaScript.

/*Think of immutability as “save as” because you know it returns a newly changed object while traditional in-place mutation would be like “save” means updating the original and letting go of an earlier state. The structure of the immutable data cannot be changed.

The data would be the original one and once the object is created we can not modify its state in an immutable object.Consider the immutability concept as the human body which is not affected by the outside world.A state with peace of mind. */

var concatStr = 'This ' + "is " + 'GDSC ' + 'TIU ';
console.log(concatStr);


// String object
// Above, we assigned a string literal to a variable. JavaScript allows you to create a String object using the new keyword, as shown below.

var objStr1 = new String();
ObjStr1 = 'Hello World1';

// or 

var ObjStr2 = new String('Hello World2');
console.log(typeof (ObjStr1), typeof (ObjStr2));


// WARNING
// Be careful while working with String object because comparison of string objects using == operator compares String objects and not the values.Consider the following example

var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

str1 == str2; // false - because str1 and str2 are two different objects
str1 == str3; // true
str1 === str4; // true

typeof (str1); // object
typeof (str3); //string



// PROPERTIES
var str1 = "Some String"
str1.length //11

// METHODS

charAt(position)
charCodeAt(position)
concat([string, ,])
indexOf(SearchString, Position)
lastIndexOf(SearchString, Position)
localeCompare(string, position)
match(RegExp)
replace(searchValue, replaceValue)
// .......... etc




// -----------------------------------------------------------------------------------------------------------------
// JavaScript Numbers: Integer, Float, Binary, Exponential, Hexadecimal, Octal
// The Number is a primitive data type used for positive or negative integer, float, binary, octal, hexadecimal, and exponential values in JavaScript.

// The Number type in JavaScript is double - precision 64 bit binary format like double in C# and Java.It follows the international IEEE 754 standard.

// The first character in a number type must be an integer value, and it must not be enclosed in quotation marks.The following example shows the variables having different types of numbers in JavaScript.



var num1 = 100; // integer
var num2 = -100; //negative integer

var num3 = 10.52; // float
var num4 = -10.52; //negative float

var num5 = 0xfff; // hexadecimal
var num6 = 256e-5; // exponential
var num7 = 030; // octal
var num8 = 0b0010001; // binary

// Number() Function in JavaScript

// The Number() is a constructor function in JavaScript that converts values of other types to numbers.
var i = Number('100');
var f = Number('10.5');
var b = Number('0b100');
typeof (i); // returns number
typeof (f); // returns number
typeof (b); // returns number

// By using the new operator with the Number() function will return an object which contains constants and methods for working with numbers.
var i = new Number('100');
var f = new Number('10.5');
var b = new Number('0b100');
typeof (i); // returns object
typeof (f); // returns object
typeof (b); // returns object


// Compare Numbers
// Be careful while comparing numbers using == or === operators.The == operator compares object references and not the values whereas the === operator compare values.The following example compares numbers created by different ways.

var num1 = new Number(100);
var num2 = Number('100');
var num3 = 100;

num1 == num2; // true 
num1 === num2; // false

num2 == num3;//true
num2 === num3; // true

num1 == num3;//true
num1 === num3;//false


// Number Properties
// The Number type includes some default properties.JavaScript treats primitive values as objects, so all the properties and methods are applicable to both literal numbers and number objects.

Number.MAX_VALUE; //1.7976931348623157e+308  
Number.MIN_VALUE; //5e-324 
Number.NEGATIVE_INFINITY; //-Infinity 
Number.POSITIVE_INFINITY; //Infinity 
Number.NaN;//NaN 
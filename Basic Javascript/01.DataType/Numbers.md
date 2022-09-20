 # JavaScript Numbers: Integer, Float, Binary, Exponential, Hexadecimal, Octal
 The Number is a primitive data type used for positive or negative integer, float, binary, octal, hexadecimal, and exponential values in JavaScript.

 The Number type in JavaScript is double - precision 64 bit binary format like double in C# and Java.It follows the international IEEE 754 standard.

 The first character in a number type must be an integer value, and it must not be enclosed in quotation marks.The following example shows the variables having different types of numbers in JavaScript.

```
var num1 = 100; // integer
var num2 = -100; //negative integer

var num3 = 10.52; // float
var num4 = -10.52; //negative float

var num5 = 0xfff; // hexadecimal
var num6 = 256e-5; // exponential
var num7 = 030; // octal
var num8 = 0b0010001; // binary
```

## Number() Function in JavaScript

 The Number() is a constructor function in JavaScript that converts values of other types to numbers.
 ```
var i = Number('100');
var f = Number('10.5');
var b = Number('0b100');
typeof (i); // returns number
typeof (f); // returns number
typeof (b); // returns number
```

By using the new operator with the Number() function will return an object which contains constants and methods for working with numbers.
```
var i = new Number('100');
var f = new Number('10.5');
var b = new Number('0b100');
typeof (i); // returns object
typeof (f); // returns object
typeof (b); // returns object
```


 ## Compare Numbers
 Be careful while comparing numbers using ```==``` or ```=== ``` operators.The ```==``` operator compares object references and not the values whereas the ```===``` operator compare values.The following example compares numbers created by different ways.
```
var num1 = new Number(100);
var num2 = Number('100');
var num3 = 100;

num1 == num2; // true 
num1 === num2; // false

num2 == num3;//true
num2 === num3; // true

num1 == num3;//true
num1 === num3;//false
```

## Number Properties
The Number type includes some default properties.JavaScript treats primitive values as objects, so all the properties and methods are applicable to both literal numbers and number objects.
```
Number.MAX_VALUE; //1.7976931348623157e+308  
Number.MIN_VALUE; //5e-324 
Number.NEGATIVE_INFINITY; //-Infinity 
Number.POSITIVE_INFINITY; //Infinity 
Number.NaN; //NaN 
```

## Number Methods

| Method |	Description|
| ------ | ------ |
|toExponential(fractionDigits) | Returns exponential value as a string. |
| toFixed(fractionDigits)	| Returns string of decimal value of a number based on specified fractionDigits. |
|toLocaleString()	| Returns a number as a string value according to a browser's locale settings. |
|toPrecision(precisionNumber) |	Returns number as a string with specified total digits.|
|toString()|	Returns the string representation of the number value.
|valueOf()|	Returns the value of Number object.|

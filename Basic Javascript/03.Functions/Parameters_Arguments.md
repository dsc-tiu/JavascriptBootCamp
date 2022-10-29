# <font size="6">Parameters In Javascript</font>

<font size="5">Functions Parameters</font><br/>
Function parameters are the names listed in the function definition.

```
function name(parameter1, parameter2, parameter3) { // any number of parameters

  // code to be executed

}
```
Here `parameter1`, `parameter2`, `parameter3` are all function parameters


<font size="5">Functions Arguments</font><br/>
Function arguments are the real values passed to (and received by) the function.

<hr/>

<font size="5">Default Parameters</font><br/>
If a function is called with missing arguments (less than declared), the missing values are set to undefined.

Furthermore we can ourselves assign a default value for the parameters of a function.
```
// ES5 Method

function areaOfRectangle(length, breadth) {
  if(breadth === undefined) { // ( = = = )
    breadth = 2;
  } 
    return length * breadth;
}
```
<br/>

*ES6 (ES2015) allowed the assignment of default parameters in the **function declaration***.
```
function areaOfRectangle(length, breadth = 2) {
    return length * breadth;
}
```

## Arguments Object *(Slightly Advanced)*
The arguments object are inbuilt object in JavaScript functions.
The argument object contains an array of the arguments used when the function is called (invoked).

```
x = sumOfNumbers(1, 123, 500, 115, 44, 88);

function sumOfNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

```

## Arguments Passed by Value
In a function call the parameters are called as arguments. The pass by value sends the value of variable to the function. It does not sends the address of variable. If the function changes the value of arguments then it does not affect the original value.

<br/>

## Objects are Passed by Reference

In JavaScript, object references are values.
Because of this, objects will behave like they are passed by **reference**.
If a function changes an object property, it changes the original value.

***Changes to object properties are visible (reflected) outside the function.***
<hr/>
<hr/>
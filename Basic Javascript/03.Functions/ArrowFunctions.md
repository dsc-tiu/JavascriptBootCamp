# <font size="6"> Arrow Functions In Javascript</font>

## What are Arrow Functions?
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations. 

Arrow functions were introduced in ES6.

```
let myFunction = (a, b) => a * b;
```

There are differences between arrow functions and traditional functions, as well as some limitations:

- Arrow functions don't have their own bindings to `this`, `arguments` or `super`, and should not be used as methods.
- Arrow functions don't have access to the `new.target` keyword.
- Arrow functions aren't suitable for `call`, `apply` and `bind` methods, which generally rely on establishing a scope.
- Arrow functions cannot be used as `constructors`.
- Arrow functions cannot use `yield`, within its body.

A more comprehensive example of arrow function:

```
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```
<br/>

## Converting a "traditional anonymous function" to the simplest "arrow function":

```
// Traditional Anonymous Function
(function (a) {
  return a + 100;
});

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;

```

## **Basic Syntax**

One param. With simple expression return is not needed:
```
param => expression
(param) => expression
```

Multiple params require parentheses. With simple expression return is not needed:

```
(param1, paramN) => expression
```
Multiline statements require body braces and return:

```
// The parentheses are optional with one single parameter
param => {
  const a = 1;
  return a + param;
}
```

<hr/>
<hr/>
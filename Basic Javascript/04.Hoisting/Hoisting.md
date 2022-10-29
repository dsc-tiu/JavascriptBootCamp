# Hoisting in Javascript

JavaScript **Hoisting** refers to the process whereby the interpreter appears to move the ***declaration*** of functions, variables or classes to the top of their scope, prior to execution of the code.
## Types of Hoisting
 any of the following behaviors may be regarded as hoisting:
 
- Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
- Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
- The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

The four function declaration `(function, function*, async function, and async function*)` are hoisted with type 1 behavior; `var` declaration is hoisted with type 2 behavior; `let`, `const`, and `class` declarations (also collectively called lexical declarations) are hoisted with type 3 behavior.

Some prefer to see `let`, `const`, and `class` as **non-hoisting**, because the temporal dead zone strictly forbids any use of the variable before its declaration.

<br/>

<font size="4">**Temporal Dead Zone**</font> - ***A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.***

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a `ReferenceError`. 

The variable is initialized with a value when execution reaches the line of code where it was declared

```
{ // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}

```
<br/>

The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the code below works because, even though the function that uses the `let` variable appears before the variable is declared, the function is *called outside the TDZ*. 

```
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}

```
<hr/>
<hr/>
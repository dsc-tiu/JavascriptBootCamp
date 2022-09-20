# JavaScript Booleans
The boolean (not Boolean) is a primitive data type in JavaScript. It can have only two values: true or false. It is useful in controlling program flow using conditional statements like if else, switch, while loop, etc.

The followings are boolean variables.

### Example: boolean Variables
```
var YES = true;

var NO = false;
```

The following example demonstrates how a boolean value controls the program flow using the if condition.

### Example: Boolean
```
var YES = true;
var NO = false;

if(YES)
{
    alert("This code block will be executed");
}

if(NO)
{
    alert("This code block will not be executed");
}
```

The comparison expressions return boolean values to indicate whether the comparison is true or false. For example, the following expressions return boolean values.

### Example: boolean Expressions 
```
var a = 10, b = 20;

var result = 1 > 2; // false

result = a < b; // true

result = a > b; // false

result = a + 20 > b + 5; // true
```

## Boolean Function
JavaScript provides the Boolean() function that converts other types to a boolean type. The value specified as the first parameter will be converted to a boolean value. The Boolean() will return true for any non-empty, non-zero, object, or array.

### Example: Boolean() Function
```
var a = 10, b = 20;

var b1 = Boolean('Hello'); // true

var b2 = Boolean('h'); // true

var b3 = Boolean(10); // true

var b4 = Boolean([]); // true

var b5 = Boolean(a + b); // true
```

If the first parameter is 0, -0, null, false, NaN, undefined, '' (empty string), or no parameter passed then the Boolean() function returns false.

### Example: Boolean() Function
```
var b1 = Boolean(''); // false

var b2 = Boolean(0); // false

var b3 = Boolean(null); // false

var a;
var b4 = Boolean(a); // false
```

The new operator with the Boolean() function returns a Boolean object.

### Example: Boolean Object
```
var bool = new Boolean(true);

alert(bool); // true
Any boolean object, when passed in a conditional statement, will evaluate to true.
```
### Example: Boolean Object in Condition
```
var bool = new Boolean(false);

if(bool){
    alert('This will be executed.');
}
```
## Boolean vs boolean
The new Boolean() will return a Boolean object, whereas it returns a boolean without the new keyword. The boolean (lower case) is the primitive type, whereas Boolean (upper case) is an object in JavaScript. Use the typeof operator to check the types.

### Example: Boolean vs boolean
```
var b1 = new Boolean(true);
var b2 = true;

typeof b1; // object
typeof b2; // boolean
```
## Boolean Methods
Primitive or Boolean object includes following methods.

|Method|	Description|
|-----|----|
|toLocaleString()|	Returns string of boolean value in local browser environment.|

### Example:
``` var result = (1 > 2); result.toLocaleString(); // returns "false"

toString()	Returns a string of Boolean.
```

### Example:
```
 var result = (1 > 2); result.toString(); // returns "false"
valueOf()	Returns the value of the Boolean object.
```

### Example:
```
 var result = (1 > 2); result.valueOf(); // returns false
 ```
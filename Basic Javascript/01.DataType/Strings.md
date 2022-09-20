# STRINGS IN JAVASCRIPT : Create  Concate, Compare

String is a primitive data type in JavaScript. A string is textual content. It must be enclosed in single or double quotation marks.

Example :
```
var str1 = 'This is a string with single quotes';
var str2 = "This is a string with double quotes";
```

Strings can also be treated as 0 based character arrays
```
var str3 = "Character Array"
for (let i in str3)
    console.log(str3[i])
```

Different methods to access strings as arrays
```
for (let i = 0; i < str3.length; i++)
    console.log(str3[i])

for (let i of str3)
    console.log(i)
```
---
### Concatenation
 A string is immutable in JavaScript, it can be concatenated using plus(+) operator in JavaScript.

Think of immutability as “save as” because you know it returns a newly changed object while traditional in-place mutation would be like “save” means updating the original and letting go of an earlier state. The structure of the immutable data cannot be changed.

The data would be the original one and once the object is created we can not modify its state in an immutable object.Consider the immutability concept as the human body which is not affected by the outside world.A state with peace of mind. 
```
var concatStr = 'This ' + "is " + 'GDSC ' + 'TIU ';
concatStr // This is GDSC TIU
```

### String object
 Above, we assigned a string literal to a variable. JavaScript allows you to create a String object using the new keyword, as shown below.

```
var objStr1 = new String();
ObjStr1 = 'Hello World1';

// or 

var ObjStr2 = new String('Hello World2');
console.log(typeof (ObjStr1), typeof (ObjStr2));
```

## **WARNING !!**
 Be careful while working with String object because comparison of string objects using ``` ==``` operator compares String objects and not the values.Consider the following example
```
var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

str1 == str2; // false - because str1 and str2 are two different objects
str1 == str3; // true
str1 === str4; // true

typeof (str1); // object
typeof (str3); //string

```

## PROPERTIES
length : returns the length of the string in ```Number```
```
var str1 = "Some String"
str1.length //11
```
## METHODS

| Method      | Description |
| ----------- | ----------- |
|  charAt(position)     | Returns the character at the specified  position (in Number)        |
| charCodeAt(position)   | Returns a number indicating the Unicode value of the character at the given position (in Number).       |
| concat([string,,]) | Joins specified string literal values (specify multiple strings separated by comma) and returns a new string.    |
| indexOf(SearchString, Position) | Returns the index of first occurrence of specified String starting from specified number index. Returns -1 if not found.    |
| lastIndexOf(SearchString, Position) | Returns the last occurrence index of specified SearchString, starting from specified position. Returns -1 if not found.    |
| localeCompare(string,position) | Compares two strings in the current locale.   |
| match(RegExp) | Search a string for a match using specified regular expression. Returns a matching array.   |
| match(RegExp) | Search a string for a match using specified regular expression. Returns a matching array.   |
| replace(searchValue, replaceValue) | Search specified string value and replace with specified replace Value string and return new string. Regular expression can also be used as searchValue.   |
| replace(searchValue, replaceValue) | Search specified string value and replace with specified replace Value string and return new string. Regular expression can also be used as searchValue.  |
| slice(startNumber, endNumber) | Extracts a section of a string based on specified starting and ending index and returns a new string.  |
| split(separatorString, limitNumber) | Splits a String into an array of strings by separating the string into substrings based on specified separator. Regular expression can also be used as separator.  |
| substr(start, length) | Returns the characters in a string from specified starting position through the specified number of characters (length).  |
| substring(start, end) | Returns the characters in a string between start and end indexes. |
| toLocaleLowerCase() | Converts a string to lower case according to current locale. |
| toLocaleUpperCase() | Converts a string to Upper case according to current locale. |
| toLowerCase() | Returns lower case string value.|
| toLowerCase() | Returns lower case string value.|
|toString() |	Returns the value of String object.|
| toUpperCase()	| Returns upper case string value.|
|valueOf()|	Returns the primitive value of the specified string object.|






## SUMMARY

- JavaScript string must be enclosed in double or single quotes (" " or ' ').
- String can be assigned to a variable using = operator.
- Multiple strings can be concatenated using + operator.
- A string can be treated as character array.
- Use back slash (\) to include quotation marks inside string.
- String objects can be created using new keyword. e.g. ``` var str = new String();```
- String methods are used to perform different task on strings.

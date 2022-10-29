// HOISTING IN JAVASCRIPT
// ---------------------------------------------------------------------------------
// Type - 1 HOISTING ( Value Hoisting)

console.log(areaOfSquare(5));

function areaOfSquare(side) {
  return side * side;
}
var var1 = 10;

// ---------------------------------------------------------------------------------
// Type - 2 HOISTING ( Declaration Hoisting)

console.log('var ->', side);

var side = 10;

console.log('var ->', side);

// ---------------------------------------------------------------------------------
// Type - 3 HOISTING

console.log('let ->', variable1);
console.log('const ->', constant1);

let variable1 = 5;
const constant1 = 10;

console.log('let ->', variable1);
console.log('const ->', constant1);

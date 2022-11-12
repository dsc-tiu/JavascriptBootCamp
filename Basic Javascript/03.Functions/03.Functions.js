// function testFunc(parameter1) {
//   parameter1.firstName = parameter1.firstName + ' ' + parameter1.lastName;
//   return parameter1.firstName;
// }

// var person = {
//   firstName: 'James',
//   lastName: 'Bond',
//   age: 25,
// };

// console.log(testFunc(person));
// console.log(person);
// console.log('argument1 ->', argument1);
// console.log('argument2 ->', argument2);
// console.log('argument3 ->', argument3);

// var x = sumOfNumbers(1, 123, 500, 115, 44);

// function sumOfNumbers() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// console.log(x);

function map(func, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = func(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log(cube);

// Task 1. 
// Write implementation of function createAdd(). This function should be used as following:
// var addTen = createAdd(10);
// console.log(addTen(10));   // outputs 20
// console.log(addTen(5));   // outputs 15

function createAdd(closuredValue) {
  return function (x) {
    return closuredValue + x;
  }
}

var addTen = createAdd(10);

console.log(addTen(10));   // outputs 20
console.log(addTen(5));   // outputs 15

// Task 2. 
// Write a function that will receive an input array of integers and return array of squares of input:
// Input[1, 2, 3] should be converted to[1, 4, 9]

function squares(arr) {
  return arr.map(elem => elem * elem);
}

console.log(squares([1, 2, 3]));


// Task 3.
// Write a function that will receive an array of integers and return its product using Array.reduce


function product(arr) {
  return arr.reduce((sum, current) => sum + current)
}

console.log(product([1, 2, 3]));

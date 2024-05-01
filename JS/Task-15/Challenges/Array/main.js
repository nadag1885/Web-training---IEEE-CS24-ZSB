/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my=my.slice(zero,++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,--counter)); // ["Elham", "Mazero"]

console.log(my[zero--].slice(zero++,--counter).concat(my[counter].slice(counter))); // "Elzero"

console.log(my[counter++][++counter].concat(my[++zero][++counter].toUpperCase())); // "rO"
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let subarr= myArray.reduce((acc,current,index,arr) => acc + current ).split(",").reduce((acc,current,index,arr) => acc + current );
console.log(subarr)
// Elzero
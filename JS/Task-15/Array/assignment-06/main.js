let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.shift()
arr1.shift()
arr2.shift()
arr2.shift()
allArrs=arr1.concat(arr2).sort().join("").toLowerCase()
console.log(allArrs); // fxy
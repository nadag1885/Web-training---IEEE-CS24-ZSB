let myString = "EElllzzzzzzzeroo";
let elzero= myString.split("")
.filter(function(ele ,index){
    return ele !== myString[index-1];
}).reduce(function(acc,current,index,arr){
    return acc+current;
})
console.log(elzero)
// Elzero
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let Letters = mix.map(function (ele) {
    return isNaN(ele) ? ele : "";
    }).reduce(function(acc,current,index,array){
        return acc + current;
    });
console.log(Letters);
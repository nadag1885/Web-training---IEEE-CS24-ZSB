function sevenBoom(...num){
    for (let i = 0; i < num.length; i++){
        if (num[i].toString().includes("7")){
            return "Boom!";
        }
    }
    return "There is no 7 in the array";
}

console.log(sevenBoom(2, 55, 60, 97, 86))
function possibleBonus(x ,y){
    return y-x <= 6 && y-x >= 0;
}

console.log(possibleBonus(5 ,3))
function minMax(...num){
    let min = num[0];
    let max = num[0];

    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
        if (num[i] < min) {
            min = num[i];
        }
    }

    return `${min} , ${max}`;
}

console.log(minMax(1, 2, 3, 4, 5))
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

function replace(chars){
    let numbers = chars.filter(e => !(isNaN(e)));
    let letters = chars.filter(e => (isNaN(e)));
    return [... letters.slice(0,numbers.length) , ...letters]
}
console.log(replace(chars))
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
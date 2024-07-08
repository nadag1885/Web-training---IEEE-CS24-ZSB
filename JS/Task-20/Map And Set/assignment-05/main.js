let theName = "Elzero";

console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Array.from(new Set(theName)));
console.log([... theName]);
console.log([...new Set(theName)]);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
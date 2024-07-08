let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newset = Array.from(new Set(myFriends)).sort();
console.log(newset)
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
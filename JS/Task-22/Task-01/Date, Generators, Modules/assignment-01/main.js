let bd=new Date('9-9-2002');  
let now =new Date()

let seconds = (now - bd)/1000
console.log(`${seconds} seconds`);

let minutes= seconds / 60
console.log(`${minutes} minutes`);

let hours = minutes/60;    
console.log(`${hours} Hours`);

let days= hours /24;
console.log(`${days} days`); 

let Months = days /30.436875;
console.log(`${Months} Months`);

let years = Months / 12;
console.log(`${years} Years`)
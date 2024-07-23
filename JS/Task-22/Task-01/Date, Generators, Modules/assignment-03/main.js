let dateNow = new Date();

dateNow.setDate(0);
console.log(dateNow);
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
console.log(`Previous Month Is ${months[dateNow.getMonth()]} And Last Day Is ${dateNow.getDate()}`)
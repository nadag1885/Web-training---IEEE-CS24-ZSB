let prompotmsg = "Print Number From – To";
let num = prompt(prompotmsg,"Example: 5-20").split("-");
let num1=num[0];
let num2=num[1];
let max=Math.max(num1,num2);
let min=Math.min(num1,num2);
for(let i=min;i<=max;i++)
    console.log(i);
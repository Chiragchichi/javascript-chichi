// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


let newDate = new Date(2004,11,17)


 console.log(newDate.toLocaleDateString());

let anotherDate=Date.now()
console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));

let oneDate =new Date()
console.log(oneDate.getDate());

console.log(oneDate.toLocaleString('default',{

  weekday:"long"

}));
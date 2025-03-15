//DATES

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//date is a object

let myCreatedDate = new Date(2023, 0, 23, 5, 3)//here month start from zero
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
let yourCreatedDate = new Date("2023-01-14")//inthis format month start from 1
let ourCreatedDate = new Date("01-14-2023")//secpnd way
console.log(yourCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//these give long values to get comparable values we use date.now
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);







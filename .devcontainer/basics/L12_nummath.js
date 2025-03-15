const score = 400
console.log(score);

const balance = new Number(100)// defining our data is number

console.log(balance);

console.log(balance.toString().length)//to string checks if it iss string then number of didgit is number of charcaters
console.log(balance.toFixed(2));//precision value upto  aftre point

const otherNumber = 123.6574

console.log(otherNumber.toPrecision(3));// starting three value after rounding from start and gives in exponential if large value
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));// to convert commas according to indian syaytem

//**********MATHS*********** */

console.log(Math);
console.log(Math.abs(-4));//absolute value like only positive value
console.log(Math.round(4.3));//round off
console.log(Math.ceil(4.3));//round off to upper integer
console.log(Math.floor(4.3));//round off to lower integer
console.log(Math.min(4,3,5,6,7));//to get the min number simlarly math.max
console.log(Math.random());//random value between 0 to 1
//now we can multiply by tha range we want to take numbers from
console.log(Math.random()*10);
console.log(Math.random()*10+1);//now the range is 1 to 11
console.log(Math.floor(Math.random()*10)+1);//all values get rounded off
const min = 10
const max = 20


console.log(Math.random() *  (max - min + 1));
console.log(Math.floor(Math.random() *  (max - min + 1)) + min);// value between the given range












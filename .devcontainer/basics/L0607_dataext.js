let score = "33"
let core = 33

console.log(typeof score);
console.log(typeof (score));

console.log(typeof core);
console.log(typeof (core));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
// "" makes a number a string , normally its a string ....if ewe put a string in number( ) then it becomes a number only
//but if we put 33abc type of something inside score and then convert then it give sNaN
console.log(valueInNumber); //if we put true at 33 it will give 1 and false for zero

//"33" => 33
//"33abc"=> NaN
// true => 1 and 0 gives false

let isLoggedIn = 1

let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn);
//if we give 1 to bollean it gives true
//if 0 it gives false
//if emphty string =false
//if any other string = true

let somenumber = 33

let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);

//*********.   operationL07. ********* 

let value = 3
let negvalue = -value
//console.log(negvalue);

console.log(2+2);//similarly substraction - and multiplication * and division / and remainder %
console.log(2**2);// ** is for power here 2 to power 2
console.log(2**3);

let str1 = "arin"
let str2 = " kaushik"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //gives 12
console.log(1 + "2"); //gives 12
console.log("1" + 2 + 2); //gives 122
console.log(1 + 2 + "2"); //gives 32
// read at ECMA in short it majorly depends if first comes string then value but its a vague way to tell it

console.log( (3 + 4) * 5 % 3);// use parathesis to define priority and neet code

console.log(+true);
console.log(+""); // + converts to boolean value

let num1, num2, num3
 num1 = num2 = num3 = 2 + 2 //correct but messy

 let gameCounter = 100
 ++gameCounter 
 //increment and then operate
 gameCounter++ 
 //operate and then increment

 console.log(gameCounter);









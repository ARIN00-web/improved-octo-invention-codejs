//. # Primitive datatype
// 7 types : string ,number, boolean, null, undefined, symbol, bigint
//basics predefined here
const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = symbol('123')
const anotherId = symbol('123')// beacuse symbol is used for uniqueness so two times doesnt make it equal

const bignumber = 345635463527647687n  //n at the and makes it bigint




// # refrence type or non primitive datatype
// reference or adrees is allocated in memory
//array, object, functions 

const heros = ["shaktiman","naagraaj","doga"]

let myobj = {
    name: "hitesh",
    age: 22,
}

const myfunction= function(){
    console.log("hello world");
}

console.log(typeof bignumber);
//read ECMA about typeof
// non primitive have return typeof object


//********************
// stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Hiteshchahudhary"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);
//myyoutube name gives hitesh chaudhsry but another name gives chai aur code

let userOne ={
    email: "user@google.com",//comma ka dhyan rkhna h
    upi: "user@ybl"

}
//in heap we get reference and not value like  so value can be changed if heap is used

let userTwo = userOne

userTwo.email = "hitesh@google.com"
// dot . operater is used to access abject

console.log(userOne.email);
console.log(userTwo.email);


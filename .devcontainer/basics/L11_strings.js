const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "value");//outdated

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);// ${}is used for place holdings

const gameName = new String('hiteshc')//new is used to mak

console.log(gameName[0]);//character at 0 place
console.log(gameName.__proto__);//gives you the object which looks ampty but is isnt

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexof('t'));
//read at MDN docs

const newString = gameName.substring(0,4)
console.log(newString);   // gives charcter from 0 to 3 place 

const anotherString = gameName.slice(-8.4)
console.log(anotherString);//same but we can have negative sign also









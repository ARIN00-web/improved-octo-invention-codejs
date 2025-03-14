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
console.log(gameName.indexOf('t'));
//read at MDN docs

const newString = gameName.substring(0,4)
console.log(newString);   // gives charcter from 0 to 3 place 

const anotherString = gameName.slice(-8.4)
console.log(anotherString);//same but we can have negative sign also

const newStringOne = "    hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());//it trims the blank spaces
//trim start for removing start spaces and trim end for end spaces

const url = "https://hitesh.com/hitesh%20chaudhary"//space between urls is converted into%20  by the computer

console.log(url.replace('%20','-'));//replaces%20 with -
console.log(url.includes('hitesh'));//to check if hitesh word is p0resent in url
console.log(url.split('/'));//splits whenever /comes or anyhting inside the argument if computer sees in url splits that from there











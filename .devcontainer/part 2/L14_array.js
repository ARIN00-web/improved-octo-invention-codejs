const myArr = [0, 1, 2 ,3, 4, 5]
const myHeros = ["shaktiman","Nagraj"]

const myArr2 = new Array(1, 2 , 3, 4) 
console.log(myArr[1]);

//array methods
//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift()

//console.log(myArr.includes(9));//if this number exists or not
//console.log(myArr.indexof(3));
//const newArr = myArr.join()// adds all eleents into a string
console.log(myArr);
console.log(typeof newArr);// apfter join operation aray becomes a string form an object

//slice ,splice

console.log("A  ", myArr);
const myn1 = myArr.slice(1,3)//doesnt doesnt contain the last range aand original array doesnt gets changed
console.log(myn1);
console.log("B  ",myArr);

const  myn2 = myArr.splice(1,3)//contains range last value and all the splice elements come out of the original array

console.log("c  ", myArr);
console.log(myn2);









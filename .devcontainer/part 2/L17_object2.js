const tinderuser = new Object()
//const tinderuse ={}
console.log(tinderuser);
//console.log(tinderuse);// object can be created both ways

tinderuser.id = "123abc"
tinderuser.name = "Sam"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chaudhary"
        }
    }

}

//console.log(regularuser.fullname?.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 } //object inside object like array inside array
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({},obj1, obj2);// using empty object gives it a target and athe object work as source and are filled inside them
 const obj3 = {...obj1, ...obj2};
//console.log(obj3);


const users = [
    { 
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    }

]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));

console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'))




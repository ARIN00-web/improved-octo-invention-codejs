//singleton
Object.create// to create objects only way for singleton
//object literals
const mysym = Symbol("key1")
const Jsuser = {
    name: "Hitesh",
    "full name":"hitesh chaudhary",
    [mysym]: "mykey1",//symbol using this way compusion
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]

}//object creation

console.log(Jsuser.email);//way to access
console.log(Jsuser["email"]);//way to access//useful for string based acces
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);//symbol accessing this way compulsion


Jsuser.email = "hitesh@chatgpt.com"
Object.freeze(Jsuser)
Jsuser.email = "hi"










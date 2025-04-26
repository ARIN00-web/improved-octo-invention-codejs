async function arin(){
let delhiweather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 Deg")

    },1000)
})


let Bangaloreweather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 Deg")

    },2000)
})

// delhiweather.then(alert)
// Bangaloreweather.then(alert)
console.log("fetching delhi weather please wait")
let delhiW = await delhiweather// code wont go further until await promise is solved

console.log("fetching Bangalore weather please wait")
let BangaloreW = await Bangaloreweather
console.log("fecthed Bangalore Weather:" + BangaloreW)
return[delhiW,BangaloreW]
}
console.log("welcome to weather conrtol room")

arin()

// async function harry(){
//     return 5
// }

// harry().then((x)=>{
//     alert(x)
// })



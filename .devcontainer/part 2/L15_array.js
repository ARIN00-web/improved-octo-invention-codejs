 const marvel_heros = ["thor", "Ironman", "Spiderman"]
 const Dc_hers = ["Superman", "Flash","Batman"]

 //marvel_heros.push(Dc_hers)

 //console.log(marvel_heros);// this takes ds hers aa one single element and that why not good
 //console.log(marvel_heros[3][1]);

 //const allheros = marvel_heros.concat(Dc_hers)//this add two arrays

 //console.log(allheros);
 const allnewheros = [...marvel_heros, ...Dc_hers]//this is called spread...adss two arrays

 console.log(allnewheros);

 const anotherarray = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4,5]]]
 const realanotherarray = anotherarray.flat(Infinity)
 console.log(realanotherarray);// this spreads this arryaor flatens this

 console.log(Array.isArray("hiteesh"));//to check if array
 console.log(Array.from("hiteesh"));// to create array
 console.log(Array.from*({name: "hitesh"}))//if we dont tell what is to be made array then it gives null array

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3));//array from individual elements

 









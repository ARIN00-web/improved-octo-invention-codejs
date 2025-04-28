const http = require('http')

const server = http.createServer((req,res) => {
    // console.log(req.url)
    // res.end("HelloWorld") //once we use a server by a specific code then it runs that command only on localhost and not tha one which we add after and run  like if we hd not written line 4 before running server then after adding it wouldnt make a change 
    // // to solve it again run on terminal after changing code//  if we use localhost:300 /about then it will give /about int he terminal  / is present there by default


    if (req.url == "/about")  {
        res.end("the about page")
    }
    if(req.url == "/profile"){
        res.end("the profile page")
    }


})

server.listen(3000 )

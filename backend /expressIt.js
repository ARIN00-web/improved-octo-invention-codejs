const express = require('express');
const app = express();
const usermodel = require('./models/user')
const morgan = require('morgan')
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({exended:true}))// to get data in req.body these two are used
app.set("view engine",'ejs')
app.use(express.static("public"))

// app.get('/', (req, res) => {
//     res.render('index');
// })
app.use((req,res,next) => {
   
    const a = 2
    const b = 3

    console.log(a+b)
    return next()//after next we can go to other routes
})


app.get('/arin', (req, res) => {
    console.log(req);
    res.json({
        name: "terabaap"
    })
})

app.get('/about', (req,res) => {
    res.render('index')})

    //  app.post('/get-form-data', (req,res) => {
    //     console.log(req.query)
    //     res.send('data recieved')})

    app.post('/get-form-data', (req,res) => {
        console.log(req.body)
        res.send('data recieved')})

    app.get('/profile',(req,res) => {
        res.send("profile page")})

app.listen(3000, '0.0.0.0', () => {
    console.log(`Listening on 3000...`);
})

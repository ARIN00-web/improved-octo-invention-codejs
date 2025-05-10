const express = require('express');
const app = express();
const usermodel = require('./models/user')
const dbconnection = require('./config/db')
// const morgan = require('morgan')
// app.use(morgan('dev'))

app.use(express.json());
// app.use(express.urlencoded({exended:true}))// to get data in req.body these two are used
app.set("view engine",'ejs')
// app.use(express.static("public"))



// app.post('/register', async (req,res)=> {
//    try{
//     const { name, email, password, age } = req.body;   
//     const newUser = new usermodel({ name, email, password, age});
//     await newUser.save();
//    } catch(err){
//     console.log(err);
//     res.status(500).send("error registering");
//     return;
//    } 

//     res.send("done");
// })

app.post('/register', async (req, res) => {
    console.log("REQ BODY:", req.body); // ✅ Add this

    try {
        const { name, email, password, age } = req.body;
        const newUser = new usermodel({ name, email, password, age });
        await newUser.save();
        res.send("done");
    } catch (err) {
        console.log("ERROR:", err);  // ✅ See the real reason in terminal
        res.status(500).send("error registering");
    }
});




app.get('/get-users', (req, res) => {
    usermodel.find().then((users) => {
        console.log('Fetched users');
        res.send(users);
    }).catch(err => {
        console.error('Error fetching users:', err);
        res.status(500).send('Error fetching users');
    });
});


app.delete

// app.post('register',(req,res) => {
//     console.log(req.body)
//     res.send('user register')
// })




// app.get('/register', (req, res) => {
//     res.render('register');
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

app.get('/register', (req,res) => {
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

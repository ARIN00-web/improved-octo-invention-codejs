const express = require('express');


const usermodel = require('./models/user')
const dbconnection = require('./config/db')

// const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data
app.set("view engine", 'ejs');
app.use(express.static("public"))
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to Kinstagram Server!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
    console.log('Server is running on http://localhost:3000');

function usersignup(req, res, next) {
    const{ username, password} = req.body;
    if(username || !password) {
        return res.status(400).send('username and password needed.');

    }


    next(); // pass control to the next middleware or route handler
}


app.get('/usersignup', (req, res) => {
    res.render('open'); // Render the signup.ejs view
})

app.post('/usersignup', async (req, res) => {
    console.log("REQ BODY:", req.body); // ✅ Add this

    try {
        const { name, email, password } = req.body;
        const newUser = new usermodel({ name, email, password });
        await newUser.save();
        res.render('home'); // Render the login.ejs view
    } catch (err) {
        console.log("ERROR:", err);  // ✅ See the real reason in terminal
        res.status(500).send("error registering");
    }
});



// async function userlogin(req, res, next) {
//     const {email, password} = req.body;
//     const user = await user.findOne({email,password});
//      if(!user) 
//         return res.render('inside', {error: 'Invalid email or password'});
//     return res.render('home');} // Render the login.ejs view


app.get('/login', (req, res) => {
    res.render('inside'); // Render the login.ejs view
})



// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // 1. Find the user
//         const user = await usermodel.findOne({ email });
//         if (!user) {
//             return res.status(400).send('User not found');
//         }

//         // 2. Compare password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).send('Incorrect password');
//         }

//         // 3. Login success
//         res.send('Login successful!');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server error');
//     }
// });


app.post('/login', async (req, res) => {
    console.log("REQ BODY:", req.body); // ✅ Add this
    const { email, password } = req.body;

    try {
        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.status(400).render('inside', { error: 'User not found' });
        }

        
        if (user.password !== password) {
            return res.status(401).render('inside', { error: 'Incorrect password' });
        }

        
        res.render('home', { user });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});



app.get('/profile',(req,res) => {
    res.send("profile page")})

// app.post('/usersignup', usersignup, (req, res) => {
//     const { username, password } = req.body;
   
//     console.log(`User signed up with username: ${username} and password: ${password}`);
//     res.send('User signed up successfully!');
// })






// app.post('/usersignup', async (req, res) => {
//     console.log("REQ BODY:", req.body);

//     try {
//         const { name, email, password } = req.body;

//         // 1. Hash password before storing
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // 2. Save user
//         const newUser = new usermodel({ name, email, password: hashedPassword });
//         await newUser.save();
//         res.send("User registered successfully");
//     } catch (err) {
//         console.log("ERROR:", err);
//         res.status(500).send("Error registering");
//     }
// });
// 
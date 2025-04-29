const express = require('express');
const app = express();

app.get('/arin', (req, res) => {
    res.send("This is Arin bitch");
})
app.get('/about',(req,res) => {
    res.send('about page')})

    app.get('/profile',(req,res) => {
        res.send('profile page')})

app.listen(3000, '0.0.0.0', () => {
    console.log(`Listening on 3000...`);
})

const express = require('express');
const app = express();

app.get('/arin', (req, res) => {
    res.send("This is Arin bitch");
})

app.listen(3000, '0.0.0.0', () => {
    console.log(`Listening on 3000...`);
})
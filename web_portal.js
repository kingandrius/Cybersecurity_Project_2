const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const response = await axios.post('http://192.168.1.20:3000/auth', {
            username,
            password
        });
        res.send(`<h1>Login Result</h1><p>${response.data}</p><a href="/">Back</a>`);
    } catch (error) {
        res.send("<h1>Error</h1><p>Web_VM cannot connect to Login_VM</p>");
    }
});

app.listen(80, () => {
    console.log("WEB PORTAL ACTIVE: http://192.168.1.10");
});

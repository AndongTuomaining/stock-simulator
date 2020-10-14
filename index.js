const express = require('express');
const bodyParser = require('body-parser');
const stringine = require('stringine');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    console.log(req.body.name);
    console.log(stringine.randomChars(20, stringine.charMap.az_numbers));
    res.sendStatus(200);
})

app.listen(port);
console.log(`listening to port ${port}`);
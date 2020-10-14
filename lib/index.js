const express = require('express');
const bodyParser = require('body-parser');
const stringine = require('stringine');
const app = express();
const port = 3001;

profiles = {}

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    if (req.body.name) {
        newToken = stringine.randomChars(20, stringine.charMap.az_numbers);
        res.send(newToken);
        profiles.newToken = {"name":req.body.name};
        res.send(profiles)
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Please specify a name in your requests body.');
    }
    res.sendStatus(200);
    console.log(users);
})

app.listen(port);
console.log(`listening to port ${port}`);
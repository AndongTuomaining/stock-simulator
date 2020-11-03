const express = require('express');
const bodyParser = require('body-parser');
const stringine = require('stringine');
const app = express();
const port = 3001;

profiles = {}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/register', (req, res) => {
    if (req.body.name && req.body.balance) {
        newToken = stringine.randomChars(20, stringine.charMap.az_numbers);
        profile = {
            "name": req.body.name,
            "balance": req.body.balance
        }
        res.setHeader("x-auth-token", newToken);
        res.send(token)
        profiles[newToken] = profile;
    } else {
        res.statusCode = 400;
        res.end('Please specify a name and balance in your requests body.');
    }
    console.log(profiles);
});

app.get('/balance', (req, res) => {
    req.query.token
})


app.listen(port);
console.log(`listening to port ${port}`);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.post('/login', function (req, res) {
    res.send({logged: req.body.login === req.body.password});
});

app.listen(3001, function () {
    console.log('Chess-app fake backend listening on port 3001!');
});
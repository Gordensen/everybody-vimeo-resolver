var express = require('express');
var fetch = require('node-fetch');
var app = express();

app.get('/redirect', function (req, res) {
    let url = req.query.url;
    fetch(url)
        .then(function (fetchRes) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ vimeoURL: fetchRes.url });
        })
        .catch(function (error) {
            res.send(error);
        });
});

app.listen(3000, () => console.log("resolver is running..."));
var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;

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

app.listen(port, () => console.log("resolver is running..."));
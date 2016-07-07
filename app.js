var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

function isEmpty(value) {
    return typeof value === 'undefined' || value == '';
}

app.post('/request', (req, res) => {
    if (!isEmpty(req.body.text)) {
        res.send({
            'response_type': 'in_channel',
            'text': 'http://lmgtfy.com/?q=' + encodeURIComponent(req.body.text)
        });
    } else {
        res.send('Missing LMGTFY search query.');
    }
});

app.listen(8000, '127.0.0.1', () => {
    console.log('Started app, listening on 8000');
});
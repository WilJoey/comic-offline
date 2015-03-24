var express = require('express');
var app = express();

app.get('/', function (req,res){
    res.send('abc');
});

app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5978);
app.listen(port);
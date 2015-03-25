var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
    defaultLayout: 'main', 
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function (req,res){
    var luckey = Math.round(Math.random() * 10);
    res.render('index',{name:'world ' + luckey});
});

app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5978);
app.listen(port);
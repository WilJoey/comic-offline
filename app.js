var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var request = require('request');
var async = require('async');
var cheerio = require('cheerio');

app.engine('.hbs', exphbs({
    defaultLayout: 'main', 
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/luck', function (req,res){
    var luck = Math.round(Math.random() * 10);
    res.render('lucky',{name:'world ' + luck});
});

app.get('/', function (req, res){
    var url = 'http://www.cartoonmad.com/comic/1152.html';

    async.waterfall([
        function (cb) {
            request(url, function (errRequest, response, body) {
                if(errRequest){
                    return cb(err);
                }
                cb(null, body);
            });
        }
        ], function(err, output) {
            if (err) {
                res.render('index', { result:err });
            }
            var result = "joe";
            res.render('index', { result:output});
        }
    );

    
});



app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5978);
app.listen(port);
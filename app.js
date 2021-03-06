var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var request = require('request');
var async = require('async');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var parser = require('./libs/parseHtml.js');

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
    var encode = 'big5';

    async.waterfall([
        function (cb) {
            request({url: url, encoding: null}, function (errRequest, response, body) {
                if(errRequest){
                    return cb(err);
                }
                cb(null, response, body);
            });
        }
        ], function (err, response, body) {
            if (err) {
                res.render('index', { result:err });
            }
            var html = iconv.decode(new Buffer(body), encode);

            var result = parser.parseCollection(html);
            res.render('index', { result: result});
        }
    );

    
});



app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5978);
app.listen(port);
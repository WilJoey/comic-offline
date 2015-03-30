var cheerio = require('cheerio');

module.exports = {
    parseCollection: function(html) {
        var $ = cheerio.load(html, {
            normalizeWhitespace: false,
            xmlMode: false,
            decodeEntities: false //dont decode
        });
        //var info = $('#info').find('td').text().trim().replace(/(\r\n|\n|\r|\s)/g,'');
        var info = $('#info');//.find('td').html().trim(); //.replace(/(\r\n|\n|\r|\s)/g,'');
        return info.length;
        
    }

};
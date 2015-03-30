var assert = require('assert');
var fs = require('fs');
var parser = require('../libs/parseHtml.js');

describe('Test Suite 1', function() {
    //it('Test 1', function() {
    //    assert.ok(true, "This shouldn't fail");
    //});

    //it('Test 2', function() {
    //    assert.ok(1 === 1, "This shouldn't fail");
    //    //assert.ok(false, "This should fail");
    //    assert.equal(false, false, "This should fail");
    //});

    it('Test Parse Html Collection', function () {
        
        fs.readFile('../data/book-collection.txt', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
            var result = parser.parseCollection(data);
            var actual = 12;
            assert.equal(result, actual, "This should equal.");
        });
        
    });
});

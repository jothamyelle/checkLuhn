var assert = require('assert');
var checkLuhn = require('../checkLuhn');

describe('checkLuhn', function() {
    describe('#checkLuhn()', function() {
        it('should return an array', function() {
        assert.equal(Array.isArray(checkLuhn.checkLuhn('79927398713')), true);
        });
    });
});
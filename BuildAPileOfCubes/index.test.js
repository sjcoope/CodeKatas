var assert = require('assert');
var index = require('./index.js')

describe('Basic Tests', () => {
    it('when input is 4183059834009 it should return 2022', () => {
        var input = 4183059834009
        var expected = 2022
        assert.equal(index.findNb(input), expected)
    })

    it('when input is 4183059834009 it should return 2022', () => {
        var input = 4183059834009
        var expected = 2022
        assert.equal(index.findNb(input), expected)
    })
    
    it('when input is 24723578342962 it should return -1', () => {
        var input = 24723578342962
        var expected = -1
        assert.equal(index.findNb(input), expected)
    })
    
    it('when input is 135440716410000 it should return 4824', () => {
        var input = 135440716410000
        var expected = 4824
        assert.equal(index.findNb(input), expected)
    })
    
    it('when input is 40539911473216 it should return 3568', () => {
        var input = 40539911473216
        var expected = 3568
        assert.equal(index.findNb(input), expected)
    })
    
})
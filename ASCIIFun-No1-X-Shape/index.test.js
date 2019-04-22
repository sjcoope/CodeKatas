var assert = require('assert');
var index = require('./index.js')

describe("Success cases", () => {

    it("When 3 it should look like '\\n■□■\\n□■□\\n■□■'", () => {
        var expected = "■□■\n□■□\n■□■"
        var actual = index.x(3)
        console.log('actual', JSON.stringify(actual))
        assert.equal(actual, expected)
    })

    it("When 5 it should look like '\\n■□□□■\\n□■□■□\\n□□■□□\\n□■□■□\\n■□□□■'", () => {
        var expected = "■□□□■\n□■□■□\n□□■□□\n□■□■□\n■□□□■"
        var actual = index.x(5)
        console.log('actual', JSON.stringify(actual))
        assert.equal(actual, expected)
    })

    it("When 7 it should look like '\\n■□□□□□■\\n□■□□□■□\\n□□■□■□□\\n□□□■□□□\\n□□■□■□□\\n□■□□□■□\\n■□□□□□■'", () => {
        var expected = "■□□□□□■\n□■□□□■□\n□□■□■□□\n□□□■□□□\n□□■□■□□\n□■□□□■□\n■□□□□□■"
        var actual = index.x(7)
        console.log('actual', JSON.stringify(actual))
        assert.equal(actual, expected)
    })

})

describe("Failure cases", () => {

    it('when passing "null" it should throw error', () => {
        assert.throws(() => {
            x.index(null)
        }, "Should have thrown an invalid input error")
    })

    it('when passing "undefined" it should throw error', () => {
        assert.throws(() => {
            x.index(null)
        }, "Should have thrown an invalid input error")
    })

    it('when passing even number it should throw error', () => {
        assert.throws(() => {
            x.index(2)
        }, "Should have thrown an invalid input error")
    })

    it('when passing number less than three it should throw error', () => {
        assert.throws(() => {
            x.index(1)
        }, "Should have thrown an invalid input error")
    })

})

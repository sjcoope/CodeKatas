
module.exports = {

    // Solution #1
    x1: (n) => {
        if (n === undefined || n === null || (n % 2) === 0 || n < 3) {
            throw new Error('n is invalid')
        }

        var on = "■", off = "□"

        var result = "";
        for(var row = 1; row <= n; row++){
            for(var col = 1; col <= n; col++) {
                result += ((row === col) || (col === (n - (row-1)))) ? on : off
            }
            result += (row !== n) ? "\n" : ""
        }

        return result
    },

    // Solution #2
    x: (n) => {
        if (n === undefined || n === null || (n % 2) === 0 || n < 3) {
            throw new Error('n is invalid')
        }

        var on = "■", off = "□"
        var result = []

        // Fill
        for(var rowNum = 0; rowNum < n; rowNum++) {
            var row = new Array(n).fill(off)
            row[rowNum] = on
            row[((n-1)-rowNum)] = on
            result[rowNum] = row.join("")
        }

        // Read
        return result.join("\n")
    }
}

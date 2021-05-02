var readline = require('readline');

var lines = []
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function (line) {
    lines.push(line)
});

rl.on('close', function () {
    solve(lines)
})


function solve(lines) {
    for (let i = 1; i < lines.length; i++) {
        let tmp = lines[i].split(' ')
        let K = Number(tmp[2])
        let A = BigInt(tmp[0])
        let B = BigInt(tmp[1])
        if (A === B) {
            console.log('DRAW')
        } else {
            if (K === 1) {
                if (A > B) {
                    console.log('A')
                } else {
                    console.log('B')
                }
            }
            if (K === -1) {
                if (A < B) {
                    console.log('A')
                } else {
                    console.log('B')
                }
            }
        }
    }
}
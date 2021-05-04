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
        if (isPrime(Number(lines[i]))) {
            console.log('Prime')
        } else {
            console.log('Composite')
        }
    }
}

function isPrime(n) {
    if (n === 1) return false
    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            return false
        }
    }
    return true
}
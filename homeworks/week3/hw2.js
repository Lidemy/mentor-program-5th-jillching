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
    let tmp = lines[0].split(' ')
    let n = Number(tmp[0])
    let m = Number(tmp[1])
    for (let i = n; i <= m; i++) {
        if (Narcissistic(i)) {
            console.log(i)
        }
    }
}

function digitsCount(n) {
    let res = 0
    if (n === 0) return 1
    while (n != 0) {
        n = Math.floor(n / 10)
        res++
    }
    return res
}

function Narcissistic(n) {
    let j = n
    let digits = digitsCount(n)
    let sum = 0
    while (j != 0) {
        let num = j % 10
        sum += num ** digits
        j = Math.floor(j / 10)
    }
    if (sum === n) {
        return true
    } else {
        return false
    }
}

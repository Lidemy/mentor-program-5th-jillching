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
    for (let i = 0; i < lines.length; i++) {
        star(Number(lines[i]))
    }
}

function star(n) {
    let str = ''
    for (let j = 1; j <= n; j++) {
        str += '*'
        console.log(str)
    }
}

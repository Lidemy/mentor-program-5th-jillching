function join(arr, concatStr) {
    var resJoin = ''
    for (i = 0; i < arr.length; i++) {
        resJoin += arr[i] + concatStr
    }
    return resJoin
}

function repeat(str, times) {
    var resRepeat = ''
    for (i = 1; i <= times; i++) {
        resRepeat += str
    }
    return resRepeat
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));

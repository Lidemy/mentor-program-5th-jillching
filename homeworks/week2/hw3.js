function reverse(str) {
    var res = ''
    for (i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    console.log(res)
}

reverse('hello');
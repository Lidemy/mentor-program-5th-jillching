function capitalize(str) {
    var res = ''
    res = str[0].toUpperCase() + str.slice(1)
    return res

}
console.log(capitalize('hello'));
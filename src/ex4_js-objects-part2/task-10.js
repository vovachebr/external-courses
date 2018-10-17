function reverse(str){
    return str.split("").reverse().join("");
}

console.log(reverse('abc'));
module.exports = reverse;
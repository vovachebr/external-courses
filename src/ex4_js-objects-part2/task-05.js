function substring(str,subString){
    return String(str).includes(subString);
}

console.log(substring('I love cats', 'cats'));
console.log(substring('', 'cats'));
module.exports = substring;
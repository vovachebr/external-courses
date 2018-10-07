function upperCamelize(expression){
    let wordArray = expression.split(' ');
    wordArray[0] = wordArray[0][0].toLowerCase() + wordArray[0].slice(1);
    for (let i = 1; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join('');
}

console.log(upperCamelize('User Object', 5));
module.exports = upperCamelize;
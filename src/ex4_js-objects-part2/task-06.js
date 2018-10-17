function camelize(expression){
    let wordArray = expression.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
    }
    return wordArray.join(' ');
}

console.log(camelize('I love cats', 'I Love Cats'));
console.log(camelize('I am cool', 'I Am Cool'));
module.exports = camelize;
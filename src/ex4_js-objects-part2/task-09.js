function insert(expression,word,position){
    let wordArray = expression.split(' ');
    const positionToInsert = position+1;
    let deletedElements = wordArray.splice(positionToInsert,wordArray.length,word);
    wordArray.push(deletedElements);
    return wordArray.join(" ");
}

console.log(insert('I am cool', 'very', 1));
module.exports = insert;
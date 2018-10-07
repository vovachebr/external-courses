function countSymbols(str){
    let currentStr = str.split('');
    const result = {};
    while(currentStr.length){
        let letter = currentStr[0];
        let lengthBefore = currentStr.length;
        currentStr = currentStr.filter((l) => l !== letter);
        result[letter]= lengthBefore-currentStr.length;
    }
    return result;
}

let restult = countSymbols('abbac');
console.log(result.a);
console.log(result.b);
console.log(result.c);

module.exports = countSymbols;
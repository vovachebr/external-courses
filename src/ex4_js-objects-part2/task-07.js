function fit(str,length){
    let result = str;
    if(str.length>length){
        result = str.slpice(0,length)+"…";
    }
    return result;
}

console.log(fit('abcdefg', 5)); 
console.log(fit('abcdefg', 10));
module.exports = fit;
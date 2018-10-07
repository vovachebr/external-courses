function random(min,max){
    return Math.random()*(max-min)+min;
}

console.log(random(3,10));
module.exports = random;
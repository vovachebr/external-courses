function summ(left,right){
    return Number((left+right).toFixed(3));
}

console.log(summ(3.455, 4.55));//8.005
module.exports = summ;
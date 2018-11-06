function reduce(array, callback, initialValue){
    let accomulator = initialValue || 0;
    for(let i=0; i<array.length; i++){
        accomulator=callback(accomulator,array[i],i,array);
    }
    return accomulator;
}

const arr = [1, -5, 3, -1, 2];

console.log(reduce(arr, function(sum, current) {return sum + current;}));//0
console.log(reduce(arr, function(prev, item, i, array) {return prev*item*i+array.length;}, 7));//2805

module.exports = reduce;
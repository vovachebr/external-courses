function map(array, callback){
    const result = [];
    for(let i=0; i<array.length; i++){
        result.push(callback(array[i],i,array))
    }
    return result;
}

const arr = [1, -5, 3, -1, 2];
console.log(map(arr, function(item, i, array) {return (item*i-array.length)}));//[-5, -10, 1, -8, 3]
console.log(map(arr, function(item, i, array) {return (item*i+array.length)}));//[5, 0, 11, 2, 13]

module.exports = map;
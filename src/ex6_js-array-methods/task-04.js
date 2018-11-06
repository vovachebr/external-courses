function filter(array, callback){
    const result = [];
    for(let i=0; i<array.length; i++){
       if(callback(array[i],i,array)){
           result.push(array[i]);
       }
    }
    return result;
}

const arr = [1, -5, 3, -1, 2];
console.log(filter(arr, function(item, i, array) {return (item*i-array.length) > 0;}));//[3, 2]
console.log(filter(arr, function(item, i, array) {return (item*i+array.length) > 0;}));//[1, 3, -1, 2]

module.exports = filter;
function some(array, callback){
    for(let i=0; i<array.length; i++){
       if(callback(array[i],i,array)){
           return true;
       }
    }
    return false;
}

const arr = [1, -1, 2, -2, 3];
console.log(some(arr, function(item, i, array) {return (item*i-array.length) > 0;}));//true
console.log(some(arr, function(item, i, array) {return (item*i-3*array.length) > 0;}));//false

module.exports = some;
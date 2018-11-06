function every(array, callback){
    for(let i=0; i<array.length; i++){
       if(!callback(array[i],i,array)){
           return false;
       }
    }
    return true;
}

const arr = [1, -4, 2, -1, 3];
console.log(every(arr, function(item, i, array) {return (item*i-array.length) > 0;}));//false
console.log(every(arr, function(item, i, array) {return (item*i+array.length) > 0;}));//true

module.exports = every;
function slice(arr, begin, end){
    let beginValue = begin;
    let endValue = end;
    const result = [];
    if(beginValue === undefined){
        return arr;
    }

    if(endValue === undefined){
        endValue = arr.length;
    }

    if(beginValue<0){
        beginValue = arr.length+beginValue;
    }

    if(endValue<0){
        endValue = arr.length+endValue;
    }

    for(let i=beginValue; i<endValue; i++){
        result.push(arr[i]);
    }
    return result;
}

const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(slice(arr, 1, 4)); //['b', 'c', 'd']
console.log(slice(arr, 2)); //['c', 'd', 'e']
console.log(slice(arr));//['a', 'b', 'c', 'd', 'e']
console.log(slice(arr, -4, -2)); //['b', 'c']

module.exports = slice;
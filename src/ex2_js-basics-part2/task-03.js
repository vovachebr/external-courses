function f(arr){
    const correctArr = Array.from(arr);
    evenCount = correctArr.filter((e)=> e && e % 2 === 0 && e !==0).length;
    oddCount = correctArr.filter((e)=>e % 2 === 1).length;
    zeroCount = correctArr.length - evenCount - oddCount;
    return [evenCount, oddCount, zeroCount]
}

console.log(f([1,2,3,0]));
console.log(f([1, 2, 3, 4]));
console.log(f([0,10,24,31,0]));
console.log(f([1, 2, null,null]));
console.log(f([1, 0]));
console.log(f([]));


module.exports = f;
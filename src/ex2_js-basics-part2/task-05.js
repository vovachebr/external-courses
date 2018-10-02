function f(arr){
    const correctArr = Array.from(arr);
    let max = correctArr[0];
    for(let i = 1; i<correctArr.length;i++)
        if(correctArr[i] > max)
            max = correctArr[i];

    return max;
}

console.log(f([1,2,3,0]));
console.log(f([1,1,1]));
console.log(f([1,1,2]));
console.log(f([9,3,45]));
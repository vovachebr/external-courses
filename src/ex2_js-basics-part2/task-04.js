function f(arr){
    const correctArr = Array.from(arr);
    for(let i = 1; i<correctArr.length;i++)
        if(correctArr[i-1] != correctArr[i])
            return false;            
    return true;
}

console.log(f([1,2,3,0]));
console.log(f([1,1,1]));
console.log(f([1,1,2]));
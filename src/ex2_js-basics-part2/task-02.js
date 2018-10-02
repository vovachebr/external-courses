function f(arr){
    const correctArr = Array.from(arr);
    correctArr.forEach(element => {
        console.log(element);
    });
    console.log("Число элементов: "+ correctArr.length);
}

/*function f1(arr){
    for (var i = 0; i < arr.length; i++)
        console.log(arr[i]);

    console.log("Число элементов: "+ arr.length);
}*/

f([1,2,3,4]);
f(["123","534","654"]);
f("asdzx");

module.exports = f;
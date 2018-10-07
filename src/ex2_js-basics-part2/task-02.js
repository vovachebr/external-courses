function f(arr){
    const correctArr = Array.from(arr);
    correctArr.forEach(element => {
        console.log(element);
    });
    console.log("Число элементов: "+ correctArr.length);
}

f([1,2,3,4]);
f(["123","534","654"]);
f("asdzx");

module.exports = f;
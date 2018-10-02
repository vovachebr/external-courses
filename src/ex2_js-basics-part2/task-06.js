function f(value){
    if(+value > 1000)
    {
        console.log("incorrectData");
        return;
    }

    for (var i=2;i<value;i++){
        if(value <=1 || value%i==0){
            return false;
        }
    }
    return true;
}
console.log("Число 13 - " + (f(13) ? "простое" : "составное") + "число");
console.log("Число 14 - " + (f(14) ? "простое" : "составное") + "число");
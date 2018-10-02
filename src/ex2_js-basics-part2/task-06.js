function f(value){
    if(+value > 1000)
    {
        console.log("incorrectData");
        return;
    }

    for (var i=2;i<value;i++){
        if(value <= 1 || value%i === 0){
            console.log(`Число ${value} - составное число`);
        }
    }
    console.log(`Число ${value} - простое число`);
}
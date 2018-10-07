function f(value){
    if(+value > 1000)
    {
        return "Данные неверны";
    }

    for (let i=2;i<value;i++){
        if(value <= 1 || value%i === 0){
            return `Число ${value} - составное число`
        }
    }
        return `Число ${value} - простое число`;
}

module.exports = f;
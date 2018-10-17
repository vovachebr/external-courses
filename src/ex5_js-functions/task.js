var calculator = Calculator();

function Calculator () {
    this.result = 0;
    this.getResult = function(){
        return this.result;
    };
    this.reset = function(){
        this.result=0;
        return this.result;
    }
    this.add = function(value){
        if(value){
            this.result += value;
        }
        return add;
    }
    this.subtract = function(value){
        if(value){
            this.result -= value;
        }
        return subtract;
    }
    this.divide = function(value){
        if(value && value !== 0){
            this.result /= value;
        }
        return divide;
    }
    this.multiply = function(value){
        if(value){
            this.result *= value;
        }
        return multiply;
    }
    return this;
}


console.log(calculator.add(4));
console.log(calculator.getResult());
console.log(calculator.add(5)(6)(7));
console.log(calculator.multiply());
console.log(calculator.getResult());
console.log(calculator.result);
module.exports = Calculator();

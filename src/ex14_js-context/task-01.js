var calculator = new Calculator();

function Calculator () {
    this.result = 0;
    this.getResult = function(){
        return this.result;
    };
    this.reset = function(){
        this.result=0;
        return this;
    }
    this.setState = function(value){
        this.result=value;
        return this;
    }
    this.add = function(value){
        if(value){
            this.result += value;
        }
        return this;
    }
    this.subtract = function(value){
        if(value){
            this.result -= value;
        }
        return this;
    }
    this.divide = function(value){
        if(value && value !== 0){
            this.result /= value;
        }
        return this;
    }
    this.multiply = function(value){
        if(value){
            this.result *= value;
        }
        return this;
    }
    this.fetchData = function(callback){
        setTimeout(()=>{this.setState(500);
        callback()},2000)
    }
}


/*console.log(calculator.add(4));
console.log(calculator.getResult());
console.log(calculator.add(5)(6)(7));
console.log(calculator.multiply());
console.log(calculator.getResult());
console.log(calculator.result);*/

const result = calculator.add(100)
    .multiply(2)
    .divide(20)
    .reset()
    .subtract(1)
    .getResult();

console.log(result); // -1

module.exports = Calculator();

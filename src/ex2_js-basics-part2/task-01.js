'use strict'

function f(value){
    if(typeof(value) === "string" || typeof(value) === "number")
        return typeof(value);
}

console.log(f(1));
console.log(f("1"));
console.log(f([1]));
console.log(f({1:1}));

module.exports = f;
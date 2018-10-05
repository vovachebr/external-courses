function f(property, object){
    return (property in object) ? true : false;
}

console.log(f("prop",{}));
console.log(f("prop",{prop:1}));
console.log(f("null",{null:1}));
console.log(f("",{prop:"12345678"}));
module.exports = f;
function f(property, object){
    if(!(property in object)){
        object[property]="new";
    }
    return object;
}

console.log(f("prop",{}));
console.log(f("prop",{prop:1}));
console.log(f("null",{null:1}));
console.log(f("newProp",{prop:"12345678"}));
module.exports = f;
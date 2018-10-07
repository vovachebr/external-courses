function f(property, object){
    var newObject = object;
    if(!(property in newObject)){
        newObject[property]="new";
    }
    return newObject;
}

console.log(f("prop",{}));
console.log(f("prop",{prop:1}));
console.log(f("null",{null:1}));
console.log(f("newProp",{prop:"12345678"}));
module.exports = f;
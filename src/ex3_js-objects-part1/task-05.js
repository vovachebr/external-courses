function f(obj){
    let copyObj = {};
    var key;
    for (key in obj) {
        copyObj[key] = obj[key];
    }
    return copyObj;
}

let myObj = {a:1,b:"abcd",cde:true,myProp:[1,2,3]};
let person = {name:"Bob",surname:"Bob's surname",age:32,myProp:{a:1,b:"abcd",cde:true,propName:[1,2,3]}};
console.log(f(myObj));
console.log(f(myObj)===myObj);
console.log(f(person));
console.log(f(person)===person);
module.exports = f;
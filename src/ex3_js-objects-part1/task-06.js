function f(obj){
    let copyObj = {};
    for (let key in obj) {
        if(typeof obj[key] === "object"){
            if(Array.isArray(obj[key])){
                copyObj[key] = [];
                const arrLength = obj[key].length;
                for(let i=0;i<arrLength;i++){
                    copyObj[key].push(f(obj[key][i]));
                }
            }
            else{
                copyObj[key] = f(obj[key]);
            }
        }
        else{
            copyObj[key] = obj[key];
        }
    }
    return copyObj;
}
console.log(f({a: 1, b: {c: 0}, e: {f: [{g: 1}]}}));

let myObj = {a:1,b:"abcd",cde:true,myProp:[1,2,3]};
let person = {name:"Bob",surname:"Bob's surname",age:32,myProp:{a:1,b:"abcd",cde:true,propName:[1,2,3]}};
console.log(f(myObj));
console.log(f(myObj)===myObj);
console.log(f(person));
console.log(f(person)===person);
module.exports = f;
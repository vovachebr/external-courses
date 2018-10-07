function f(obj){
    var key;
    for (key in obj) {
        console.log("Property: "+key+" with value: "+obj[key]);
    }
}

f({a:1,b:"abcd",cde:true,myProp:[1,2,3]})
module.exports = f;
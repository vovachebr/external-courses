function getPropFromProto(key, obj){
    return !Object.prototype.hasOwnProperty.call(obj,key) ? obj[key] : undefined;
}

const obj = Object.create({a: 1});
obj.b = 2;
console.log(getPropFromProto('a', obj));
console.log(getPropFromProto('b', obj));

module.exports = getPropFromProto;
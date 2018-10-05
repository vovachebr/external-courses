function f(){
    let obj = {};
    obj.superNumber = Infinity;
    obj.str = "super puper string";
    obj.superObject = {key:"123",value:"asdf",superValue:"SuperAsdf"};
    delete obj.superObject;
}
module.exports = f;
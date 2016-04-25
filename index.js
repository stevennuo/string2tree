module.exports = function string2tree(obj) {
    const tree = {};
    for (key in obj)  {
        //console.log('key:'+key+' val:'+obj[key])
        insert(tree, key.split('.'), obj[key])
    }
    //console.log('tree:'+JSON.stringify(tree));
    return tree;
};

const insert = (obj, arr, val) => {
    for (item of arr) {
        obj[item] = obj[item] || {};
        obj = obj[item]
    }
    obj._v = val
};
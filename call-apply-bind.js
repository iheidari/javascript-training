var obj = { num: 4 };
var functionName = function (arg1, arg2, arg3) {

}

functionName.call(obj, arg1, arg2, arg3);

functionName.apply(obj, [arg1, arg2, arg3]);

var bound = functionName.bind(obj);
bound(arg1, arg2, arg3);
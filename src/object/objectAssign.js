/**
 * @desc Object.assign，兼容性
 * @param {Any} values
 */
Object.prototype.assign = function(target){
    var output = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
            for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                    output[nextKey] = source[nextKey];
                }
            }
        }
    }
    return output;
};
module.exports = Object.assign

/**
 * 
 * @desc 判断两个数组是否相等
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @return {Boolean}
 */
function arrayEqual(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    for (var i = 0, l = arr1.length; i < l; i++) {
        if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
            if (!arrayEqual(arr1[i], arr2[i])) return false;
        }
        else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

module.exports = arrayEqual;
/**
 * 
 * @desc  判断某个元素是否在浏览器可视区域
 * @param {HTMLElement} ele 
 * @returns Boolean
 */
function isInViewPort(ele) {
    var rect = ele.getBoundingClientRect();
    var clientHeight = window.innerHeight || document.documentElement.clientHeight;
    if (parseInt(rect.top) >= 0 && rect.bottom <= clientHeight) {
        return true;
    }
    return false;
}

module.exports = isInViewPort;
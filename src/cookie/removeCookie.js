var setCookie = require('./setCookie');
/**
 * 
 * @desc 根据name删除cookie
 * @param  {String} name 
 * @param {Object} params
 */
function removeCookie(name, params) {
    // 设置已过期，系统会立刻删除cookie
    params.expires = -1;
    setCookie(name, '', params);
}

module.exports = removeCookie
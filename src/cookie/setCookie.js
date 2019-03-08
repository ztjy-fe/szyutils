/**
 * 
 * @desc  设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Object} params 
 */
function setCookie(name, value, params) {
    var stringifiedAttributes = '';

    // 过期时间
    if (typeof params.expires === 'number') {
    	var date = new Date();
    	date.setDate(date.getDate() + params.expires);
    	stringifiedAttributes +=';expires=' + date;
    }

    // path
    var path = params.path ? params.path : '/';
    stringifiedAttributes +=';path=' + path;

    // domain
    if (params.domain) {
    	stringifiedAttributes +=';domain=' + params.domain;
    }

    document.cookie = name + '=' + value + stringifiedAttributes;
}

module.exports = setCookie
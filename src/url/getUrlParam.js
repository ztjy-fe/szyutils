/**
 * @desc   获取查询参数
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    var sps = window.location.href.split('?')
    var r = sps[1] && sps[1].match(reg)
    if (r) return decodeURIComponent(r[2])
    return ''
}

module.exports = getUrlParam
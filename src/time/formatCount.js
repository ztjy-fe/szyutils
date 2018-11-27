/**
 * @desc   数量格式化
 * @param  {Number} count
 * @return {String}
 */
function formatCount(count) {
    count = parseInt(count) || 0
    if (count < 10000) {
        return count
    } else {
        return (count / 10000).toFixed(1) + '万'
    }
}

module.exports = formatCount
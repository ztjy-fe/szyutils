/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 
 * @return {String}
 */
const formatFixedDate = require('./formatFixedDate')

function formatPassTime(startTime) {
    var currentDate = new Date()
    var startDate = new Date(startTime)
    var currentTime = +currentDate,
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    var currentYear = currentDate.getFullYear()
    if (min < 1) {
        return '刚刚'
    } else if (min >= 1 && min <= 59) {
        return min + "分钟前"
    } else if (hour >= 1 && hour <= 24) {
        return hour + "小时前"
    } else if (hour > 24 && startDate.getFullYear() === currentYear) {
        return formatFixedDate(startTime, 'MM-dd')
    } else {
        return formatFixedDate(startTime, 'yyyy-MM-dd')
    }
}

module.exports = formatPassTime
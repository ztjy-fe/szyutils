/**
 * @desc   播放时长格式化
 * @param  {Number} s
 * @return {String}
 */
function formatPlayTime(s) {
	var t = ''
	if (s > -1) {
		var min = Math.floor(s / 60) % 60
		var sec = s % 60
		if (min < 10) {
			t += "0"
		}
		t += min + ":"
		if (sec < 10) {
			t += "0"
		}
		t += sec
	}
	return t
}

module.exports = formatPlayTime
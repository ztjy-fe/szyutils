/**
 * @desc 删除URL中固定参数
 * @return new url
 */
function deleteUrlParam(currentUrl, name) {
	if (currentUrl) {
		var baseUrl = currentUrl.split('?')[0] + '?'
		var query = currentUrl.split('?')[1]
		if (query.indexOf(name) > -1) {
			var obj = {}
			var arr = query.split("&")
			for (var i = 0; i < arr.length; i++) {
				arr[i] = arr[i].split("=")
				obj[arr[i][0]] = arr[i][1]
			}
			delete obj[name]
			var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&")
			return url
		}
		return currentUrl
	}
	return ''
}

module.exports = deleteUrlParam
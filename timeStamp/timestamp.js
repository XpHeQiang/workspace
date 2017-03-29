function getLocalTime(nS) { //转时间戳
	return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' '); //转时间戳
}
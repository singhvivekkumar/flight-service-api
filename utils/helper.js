function compareTime(initialDateTime, endDateTime) {
	let dateTime1 = new Date(initialDateTime);
	let dateTime2 = new Date(endDateTime);
	// console.log(dateTime1.getTime(), dateTime2.getTime());
	return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
	compareTime
}
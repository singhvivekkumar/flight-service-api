function compareTime(initialDateTime, endDateTime) {
	let dateTime1 = Date(initialDateTime);
	let dateTime2 = Date(endDateTime);
	return dateTime1.getTime() > dateTime2.getTime();
}
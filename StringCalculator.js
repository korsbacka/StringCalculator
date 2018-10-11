function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else if(numbers.includes(",")) {
		var arr = numbers.split(",");
		return parseInt(arr[0]) + parseInt(arr[1]);
	}

	else {
		return parseInt(numbers);
	}
};

module.exports = Add;
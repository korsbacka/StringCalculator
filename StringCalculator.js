function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else if(numbers.includes(",")) {
		var arr = numbers.split(",");
		var sum = 0;
		for(var i = 0; i < arr.length; i++) {
			sum += parseInt(arr[i]);
		}
		return sum;
	}

	else {
		return parseInt(numbers);
	}
};

module.exports = Add;
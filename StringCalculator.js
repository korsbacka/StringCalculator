function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else if(numbers.includes(",")) {
		var arr = numbers.split(",");
		return Sum(arr);
	}

	else {
		return parseInt(numbers);
	}
};

function Sum(numbers) {
	var sum = 0;
	for(var i = 0; i < numbers.length; i++) {
		sum += parseInt(numbers[i]);
	}
	return sum;
}

module.exports = Add;
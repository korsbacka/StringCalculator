function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	if(NegCheck(numbers)) {
		var regex = new RegExp("[\n,]", "g");
		var arr = numbers.split(regex);
		var negArr;
		for(var i = 0; i < arr.length; i++) {
			if(NegCheck(arr[i])) {
				negArr += (", " + arr[i]);
			}
		}
		throw "Negatives not allowed: " + negArr;
	}

	else if(numbers.includes(",") || numbers.includes("\n")) {
		var regex = new RegExp("[\n,]", "g");
		var arr = numbers.split(regex);
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
};

function NegCheck(numbers) {
	if(numbers.includes("-")) {
		return true;
	}
	return false;
}

module.exports = Add;
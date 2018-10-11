function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	else if(numbers.includes("-")) {
		var regex = new RegExp("[\n,]", "g");
		var arr = numbers.split(regex);
		var neg = "";
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].includes("-")) {
				if(neg == "") {
					neg += arr[i];
				}
				else {
					neg += (", " + arr[i]);
				}
			}
		}

		throw "Negatives not allowed: " + neg;
	}

	else if(numbers.startsWith("//")) {
		var newLinePos = numbers.indexOf("\n");
		var delimiter = numbers.substring(2, newLinePos);
		var toStartFrom = newLinePos + 1;
		var newArr = numbers.substring(toStartFrom);

		var regex = new RegExp("["+ delimiter + "\n,]", "g");

		var splitArr = newArr.split(regex);

		return Sum(splitArr);
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
		var number = parseInt(numbers[i]);
		if(number <= 1000) {
			sum += number;
		}
	}
	return sum;
};

module.exports = Add;
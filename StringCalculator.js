function Add(numbers) {
	if(numbers == "") {
		return 0;
	}

	// if there is a negative number
	else if(numbers.includes("-")) {
		var regex = new RegExp("[\n,]", "g");
		var arr = numbers.split(regex); // splitting using regex as delimiter
		var neg = ""; // empty string to display with throw
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].includes("-")) { // if index has -, add it to our list
				if(neg == "") { // purely to start the neg string
					neg += arr[i];
				}
				else { // here we want to add the negative value to our string
					neg += (", " + arr[i]);
				}
			}
		}
		// throwing error negatives not allowed
		throw "Negatives not allowed: " + neg;
	}

	// if our input starts with //, we want to add the delimiter specified
	else if(numbers.startsWith("//")) {
		var newLinePos = numbers.indexOf("\n"); // getting the position of \n
		var delimiter = numbers.substring(2, newLinePos); // getting the delimiter
		var toStartFrom = newLinePos + 1; // where do we start using the delimiter?
		var newArr = numbers.substring(toStartFrom); // substring with the numbers and delimiters we want

		var regex = new RegExp("["+ delimiter + "\n,]", "g"); // regex with new delimiter

		var splitArr = newArr.split(regex); // splitting according to our regex

		return Sum(splitArr); // returning the sum of the numbers
	}

	// if the list contains , or \n .. we know it is a delimiter for new number
	else if(numbers.includes(",") || numbers.includes("\n")) {
		var regex = new RegExp("[\n,]", "g"); // creating regex with delimiters
		var arr = numbers.split(regex); // spliting according to delimiters
		return Sum(arr); // returning the sum of the numbers
	}

	// if the list contains only number
	else {
		return parseInt(numbers);
	}
};

// helper function to calculate
function Sum(numbers) {
	var sum = 0;
	for(var i = 0; i < numbers.length; i++) {
		var number = parseInt(numbers[i]);
		// number ignored if the number is higher than 1000
		if(number <= 1000) {
			sum += number;
		}
	}
	return sum;
};

module.exports = Add;
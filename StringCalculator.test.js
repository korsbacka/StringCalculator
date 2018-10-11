const Add = require('./StringCalculator');

test("An empty string should return 0", () => {
	expect(Add("")).toBe(0);
});

test("A single number returns the number", () => {
	expect(Add("1")).toBe(1);
});

test("Empty string and number returns the number", () => {
	expect(Add(" 2")).toBe(2);
});

test("5,2 should return the product or 5+2=7", () => {
	expect(Add("5,2")).toBe(7);
});

test("87,12 should return the sum or 87+12", () => {
	expect(Add("87,12")).toBe(99);
});

test("3 numbers should return the sum", () => {
	expect(Add("87,11,1")).toBe(99);
});

test("4 numbers should return the sum", () => {
	expect(Add("1,2,3,4")).toBe(10);
});

test("new line should work as delimiter", () => {
	expect(Add("1\n3\n4")).toBe(8);
});

test("both nl and comma should work as delimiter", () => {
	expect(Add("1\n2,3")).toBe(6);
});

test("checking if there is a negative number", () => {
	expect(() => {
		Add("-12,8")
	}).toThrow();
});

test("checking if there is a neg number", () => {
	expect(() => {
		Add("-15\n-5,5")
	}).toThrow();
});

test("checking if it sums up with over 1000", () => {
	expect(Add("5,8,1001")).toBe(13);
});

test("checking if it sums up with 1000 and 2500", () => {
	expect(Add("5,4,9,1000,2500")).toBe(1018);
});

test("new regex", () => {
	expect(Add("//;\n2;5;7;8")).toBe(22);
});

test("new regex2", () => {
	expect(Add("//==\n5==5==4==2")).toBe(16);
});
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
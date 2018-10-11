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
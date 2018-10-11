const Add = require('./StringCalculator');

test("An empty string should return 0", () => {
	expect(Add("")).toBe(0);
});
const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split("\n");

let ans = 0;

instructions.forEach(instruction => {
	const digits = instruction.split("");
	let firstDigit = digits[0];
	let secondDigit = digits[1];

	for (let i = 0; i < digits.length; i++) {
		const digit = digits[i];

		if (digit > firstDigit && i != instruction.length - 1) {
			firstDigit = digit;
			secondDigit = digits[i + 1];
		} else if (digit > secondDigit) {
			secondDigit = digit;
		}
	}

	const res = parseInt(firstDigit + secondDigit);
	ans += res;
});

console.log(ans);

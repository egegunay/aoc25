const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split("\n");

let ans = 0;

for (const instruction of instructions) {
	const digits: string[] = instruction.split("");
	const arr: number[] = new Array(12).fill(0);
	let startIndex = 0;

	for (let endDigitIndex = 0; endDigitIndex < arr.length; endDigitIndex++) {
		for (let digit = startIndex; digit <= digits.length - (12 - (endDigitIndex)); digit++) {
			const value = parseInt(digits[digit]);

			if (value > arr[endDigitIndex]) {
				arr[endDigitIndex] = value;
				startIndex = digit + 1;
			} else if (digit == digits.length - (12 - (endDigitIndex + 1))) {
				startIndex = digit + 1;
			}
		}
	}

	ans += parseInt(arr.join(""))
}

console.log(ans);

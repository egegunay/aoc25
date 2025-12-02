const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split(",");

let ans = 0;

for (let i = 0; i < instructions.length; i++) {
	const values = instructions[i].split("-");
	const start = parseInt(values[0]);
	const end = parseInt(values[1]);

	for (let val = start; val <= end; val++) {
		const str = val.toString();

		for (let n = 2; n <= str.length; n++) {
			// I could just use regex but i wanna do it like this
			const size = str.length / n;
			const chunks = [];
			for (let index = 0; index < str.length; index++) {
				const begin = index * size;
				const end = begin + size;
				chunks.push(str.substring(begin, end));
			}
			const cleanchunks = chunks.filter(val => val !== ""); // ?????????? WHY EMPTY STRINGS?
			if (cleanchunks.every(v => (v == cleanchunks[0]))) {
				ans += val;
				break;
			}
		}
	}
}

console.log(ans); // this code is ugly and I want to make it better later. This version is kinda rushed to complete the challange asap.

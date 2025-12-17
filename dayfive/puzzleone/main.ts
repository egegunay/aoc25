const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split("\n");

let answer = 0;

const space = instructions.indexOf("");
const ranges = instructions.slice(0, space)
const values = instructions.slice(space + 1, instructions.length);

values.forEach(v => {
	const value = parseInt(v);
	for (const range of ranges) {
		const rangeMin = parseInt(range.split("-")[0]);
		const rangeMax = parseInt(range.split("-")[1]);

		if (value <= rangeMax && value >= rangeMin) {
			answer++;
			break;
		}
	}
})

console.log(answer);

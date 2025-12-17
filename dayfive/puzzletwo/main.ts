const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split("\n");

let answer = 0;

type range = {
	start: number,
	end: number
}

const space = instructions.indexOf("");
const arr = instructions.slice(0, space).map(v => {
	const parts = v.split('-');
	return { start: parseInt(parts[0]), end: parseInt(parts[1]) };
}) as range[];

let last: range;

arr.sort((a, b) => a.start - b.start).forEach(range => { // numerical pls
	if (!last) {
		last = range;
	} else if (last.end < range.start) {
		answer += (last.end - last.start + 1)
		last = range
	} else {
		const start = last.start;
		const end = (range.end > last.end ? range.end : last.end);

		last = { start, end }
	}
})

answer += (last!.end - last!.start + 1)

console.log(answer);

const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split(",");

let ans = 0;

for (let i = 0; i < instructions.length; i++) {
	const values = instructions[i].split("-");
	const start = parseInt(values[0]);
	const end = parseInt(values[1]);

	for (let val = start; val <= end; val++) {
		const str = val.toString();
		const mid = str.length / 2;
		const split = [str.slice(0, mid), str.slice(mid)];

		if (split[0] == split[1]) {
			ans += val;
		}
	}
}

console.log(ans);

const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split("\n");

let ans = 0;

for (let index = 0; index < instructions.length; index++) {
	const line = instructions[index];
	for (let characterIndex = 0; characterIndex < line.length; characterIndex++) {
		const character = line[characterIndex];
		if (character == ".") { continue }
		let count = 0;

		const neighbors = [
			[-1, -1], 	[-1, 0], 	[-1, 1],
			[0, -1], 				[0, 1],
			[1, -1], 	[1, 0], 	[1, 1],
		];

		for (const [dy, dx] of neighbors) {
			const row = instructions[index + dy];
			if (!row) continue;
			if (row[characterIndex + dx] === "@") count++;
		}

		if (count < 4) { ans++ }
	}
}

console.log(ans);

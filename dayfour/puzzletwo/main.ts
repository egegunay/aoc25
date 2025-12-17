const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split("\n");
const grid: string[][] = instructions.map(v => v.split(""))

let answer = 0;
let lastAnswer = -1;

while (lastAnswer != 0) {
	lastAnswer = 0;
	for (let index = 0; index < instructions.length; index++) {
		const gridSnapshot = grid;
		const line = gridSnapshot[index];
		for (let characterIndex = 0; characterIndex < line.length; characterIndex++) {
			const character = line[characterIndex];
			if (character == ".") continue;
			let count = 0;

			const neighbors = [
				[-1, -1], [-1, 0], [-1, 1],
				[0, -1], [0, 1],
				[1, -1], [1, 0], [1, 1],
			];

			for (const [dy, dx] of neighbors) {
				const row = grid[index + dy];
				if (!row) continue;
				if (row[characterIndex + dx] === "@") count++;
			}

			if (count < 4) {
				answer++;
				lastAnswer++
				grid[index][characterIndex] = ".";
			}
		}
	}
}

console.log(answer);

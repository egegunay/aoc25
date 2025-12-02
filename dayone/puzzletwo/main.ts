const text = await Deno.readTextFile("input.txt");
const instructions: string[] = text.split("\n");

let num = 50;
let pass = 0;

for (let i = 0; i < instructions.length; i++) {
	const instruction = instructions[i];
	const val = parseInt(instruction.substring(1));
	
	if (instruction[0] == "L") {
		num -= val;
	} else {
		num += val;
	}	

	if (num < 0 || num > 99) {
		pass += Math.floor(Math.abs(num) / 100);
	} else if (num == 0) {
		pass++;
	} 

	num = ((num % 100) + 100) % 100;	
}

console.log(pass)

import { compile } from "./compiler";

const createInstruction = (name, arg) => {
	return {
		name,
		arg,
		active: true,
	};
};

const testCases = new Map();

testCases.set(16, [
	createInstruction("push", 5),
	createInstruction("push", 11),
	createInstruction("add"),
]);

testCases.set(28, [
	createInstruction("push", 3),
	createInstruction("push", 3),
	createInstruction("multiply"),
	createInstruction("pop"),
	createInstruction("push", 3),
	createInstruction("multiply"),
	createInstruction("multiply"), 
	createInstruction("push", 1),
	createInstruction("add"),
]);

describe("test compiler work", () => {
	for (const [result, instruct] of testCases) {
 		test(`the result of \n[${
 				instruct
 					.map(obj => JSON.stringify(obj, null, 2))
 					.join(",\n")
 			
 		}] is "${result}"`, () => {
 			const [resStack] = compile(instruct);
			const resultValue = resStack[resStack.length - 1].value;
			expect(resultValue).toEqual(result);
		});
	}
});
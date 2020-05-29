import { range } from "./utils";


const compileError = "Compiler goes brrr...";

export const pop = from => n => {
	let arr = [];

	for (const _ of range(0, n)) {
		arr.push(from.pop());
	}

	return arr;
};

export const compile = instructions => {
	let computeStack = [];
	let viewStack = [];
	let error = null;

	const push = value => {
		computeStack.push(value);
		viewStack.push(value);
	};

	const popComputeStack = pop(computeStack);

	for (let instruct of instructions) {
		switch (instruct.name) {
			case "push":
				push(instruct.arg);
				break;
			case "add": {
				let [a, b] = popComputeStack(2);
				push(a + b);
				break;
			}
			case "subtract": {
				let [a, b] = popComputeStack(2);
				push(a - b);
				break;
			}
			case "multiply": {
				let [a, b] = popComputeStack(2);
				push(a * b);
				break;
			}
			case "divide": {
				let [a, b] = popComputeStack(2);
				push(a / b);
				break;
			}
			case "pop":
				computeStack.pop();
				viewStack.pop();
				break;
			default:
				error = "Compiler goes brrr...";
				break;
		}
	}

	return [viewStack, computeStack, error];
};

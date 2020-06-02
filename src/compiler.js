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
		const pushedValue = {
			value,
			active: true,
		};
		computeStack.push(pushedValue);
		viewStack.push(pushedValue);
	};
	
	const pop = n => {
		if(computeStack.length < n) {
			throw Error("Stack too small for this operations");
		}
	
		let arr = [];
		
		for(let i = viewStack.length - 1, j = 0; j < n && i >= 0; i--) {
			let elem = viewStack[i];
			
			if(elem.active) {
				elem.active = false;
				j++;
			}
		}
		
		for (const _ of range(0, n)) {
			arr.push(computeStack.pop());
		}

		return arr;
	};

	try {
	for (const instruct of instructions) {
		switch (instruct.name) {
			case "push":
				push(instruct.arg);
				break;
			case "pop":
				computeStack.pop();
				viewStack.pop();
				break;
			case "add": {
				let [a, b] = pop(2);
				push(a?.value + b?.value);
				break;
			}
			case "subtract": {
				let [a, b] = pop(2);
				push(a?.value - b?.value);
				break;
			}
			case "multiply": {
				let [a, b] = pop(2);
				push(a?.value * b?.value);
				break;
			}
			case "divide": {
				let [a, b] = pop(2);
				push(a?.value / b?.value);
				break;
			}
			default:
				throw compileError;
				break;
		}
	}
	} catch(error) {
		alert(error.message);
	}

	return [viewStack, computeStack, error];
};

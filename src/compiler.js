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
	let viewStack = [];
	let error = null;
	
	let id = 0;
	let history = new Set();

	const push = value => {
		const pushedValue = {
			value,
			active: true,
			id: id++,
		};
		viewStack.push(pushedValue);
	};
	
	const pop = n => {
		const activeElemsCount = viewStack.filter(({ active }) => active).length;
		
		if(activeElemsCount < n) {
			throw Error("Stack too small for this operations");
		}
	
		let arr = [];
		
		for(let i = viewStack.length - 1, j = 0; j < n && i >= 0; i--) {
			let elem = viewStack[i];
			
			if(elem.active) {
				elem.active = false;
				arr.push(elem);
				j++;
			}
		}
		
		history.add([...arr]);

		return arr;
	};
	
	const restore = () => {
		if(history.size <= 0) {
			throw Error("Something bad wrong");
		}
		
		const lastChange = [...history][history.size - 1];
		
		for(const step of lastChange) {
			viewStack.find(({ id }) => id === step.id).active = true;
		}
		
		history = new Set([...history].slice(0, -1));
	};

	try {
	for (const instruct of instructions) {
		switch (instruct.name) {
			case "push":
				push(instruct.arg);
				break;
			case "pop":
				viewStack.pop();
				restore();
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
		}
	}
	} catch(error) {
		alert(error.message);
	}

	return [viewStack, null, error];
};

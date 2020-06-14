export const compile = instructions => {
	let viewStack = [];
	let error = null;
	
	let id = 0;
	let history = new Set();

	const push = (value, type = "push") => {
		const newValue = {
			value,
			type,
			active: true,
			id: id++,
		};

		viewStack.push(newValue);
	};
	
	const pop = n => {
		const activeElemsCount = viewStack
			.filter(({ active }) => active)
			.length;
		
		if(activeElemsCount < n) {
			throw Error(`Stack too small for this operations, try option "force pop"`);
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
			throw Error(`Something bad wrong, try option "force pop"`);
		}
		
		const lastChange = [...history][history.size - 1];
		
		for(const step of lastChange) {
			viewStack
				.find(({ id }) => id === step.id)
				.active = true;
		}
		
		history = new Set([...history].slice(0, -1));
	};

	try {
		for (const instruct of instructions) {
			switch (instruct.type) {
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
					throw Error(`Compiler goes brrr..., try option "force pop"`);
			}
		}
	} catch(error) {
		return [viewStack, error.message]
	}

	return [viewStack, null];
};

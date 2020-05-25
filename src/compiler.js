export const compile = instructions => {
	let computeStack = [];
	let viewStack = [];

	for (let instruct of instructions) {
		switch (instruct.name) {
			case "push":
				viewStack.push(instruct.arg);
				computeStack.push(instruct.arg);

				break;
			case "add": {
				let [a, b] = [computeStack.pop(), computeStack.pop()];
				const result = a + b;

				computeStack.push(result);
				viewStack.push(result);

				break;
			}
			case "subtract": {
				let [a, b] = [computeStack.pop(), computeStack.pop()];
				const result = a - b;

				computeStack.push(result);
				viewStack.push(result);

				break;
			}
			default:
				console.error("Compiler goes brrr...");
				break;
		}
	}

	return [viewStack, computeStack];
};

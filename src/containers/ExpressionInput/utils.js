export const checkArg = operations => currentOperation => {
	return operations.get(currentOperation)?.arg;
};

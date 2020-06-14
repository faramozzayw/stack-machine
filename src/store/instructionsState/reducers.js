import { addInstruction, clearInstructions } from "./actions";

import { initialState } from "./data";

const expression = store => {
	store.on("@init", () => ({
		...initialState,
	}));

	store.on(addInstruction, (state, instruction) => {
		if(instruction.type === "force pop") {
			return {
				...state,
				instructionsList: state.instructionsList.slice(0, -1),
			};
		} else {
			return {
				...state,
				instructionsList: state.instructionsList.concat(instruction),
			};
		}
	});

	store.on(clearInstructions, () => ({
		...initialState,
	}));
};

export { expression };

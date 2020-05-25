import { addInstruction, clearInstructions } from "./actions";

import { initialState } from "./data";

const expression = store => {
	store.on("@init", () => ({
		...initialState,
	}));

	store.on(addInstruction, (state, instruction) => ({
		...state,
		instructionsList: state.instructionsList.concat(instruction),
	}));

	store.on(clearInstructions, () => ({
		...initialState,
	}));
};

export { expression };

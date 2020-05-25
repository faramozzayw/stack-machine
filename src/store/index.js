import { createStoreon } from "storeon";

import { storeonLogger } from "storeon/devtools";

import { expression } from "./instructionsState/reducers";

export const store = createStoreon([
	expression,
	process.env.NODE_ENV !== "production" && storeonLogger,
]);

import React from "react";

import { Title } from "bloomer";

import { Stack } from "./..";

import { useStoreon } from "storeon/react";

const InputView = () => {
	const { instructionsList } = useStoreon("instructionsList");

	const instructions = instructionsList.map(
		({ type, arg }) => ({
			value: type + (arg === null ? "" : ` ${arg}`),
			active: true,
		}),
	);

	return (
		<>
			<Title tag="h3">Input View</Title>
			<Stack data={instructions} />
		</>
	);
};

export default InputView;

import React from "react";

import { Title } from "bloomer";

import { Stack } from "./..";

import { useStoreon } from "storeon/react";

const InputView = () => {
	const { instructionsList } = useStoreon("instructionsList");

	const instructions = instructionsList.map(
		({ name, arg }) => name + (arg === null ? "" : ` ${arg}`),
	);

	return (
		<>
			<Title tag="h3">Input View</Title>
			<Stack data={instructions} />
		</>
	);
};

export default InputView;

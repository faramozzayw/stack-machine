import React from "react";

import { Title } from "bloomer";

import { useStoreon } from "storeon/react";

import { Stack } from "./..";

import { compile } from "./../../compiler";

const StackMachine = () => {
	const { instructionsList } = useStoreon("instructionsList");
	const [viewStack, _] = compile(instructionsList);

	return (
		<>
			<Title tag="h3">Stack machine</Title>
			<Stack displayTop data={viewStack} />
		</>
	);
};

export default StackMachine;

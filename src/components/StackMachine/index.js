import React, { useState, useEffect } from "react";

import { Title, Help } from "bloomer";

import { useStoreon } from "storeon/react";

import { Stack } from "./..";

import { compile } from "./../../compiler";

const StackMachine = () => {
	const [viewStack, updateView] = useState([]);
	const [error, updateError] = useState(null);
	const { instructionsList } = useStoreon("instructionsList");

	useEffect(() => {
		const [newViewStack, error] = compile(instructionsList);
		updateView(newViewStack);
		updateError(error);
	}, [instructionsList]);

	return (
		<>
			<Title tag="h3">Stack machine</Title>
			{ error && <Help isColor="warning">{error}</Help> }
			<Stack displayTop data={viewStack} />
		</>
	);
};

export default StackMachine;

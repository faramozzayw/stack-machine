import React, { useState, useEffect } from "react";

import { Title } from "bloomer";

import { useStoreon } from "storeon/react";

import { Stack } from "./..";

import { compile } from "./../../compiler";

const StackMachine = () => {
	const [viewStack, updateView] = useState([]);
	const { instructionsList } = useStoreon("instructionsList");
	

	useEffect(() => {
		const [newViewStack, _] = compile(instructionsList);
		updateView(newViewStack)
	}, [instructionsList]);

	return (
		<>
			<Title tag="h3">Stack machine</Title>
			<Stack displayTop data={viewStack} />
		</>
	);
};

export default StackMachine;

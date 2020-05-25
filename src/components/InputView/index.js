import React from "react";

import { Title } from "bloomer";

import { Stack } from "./..";

const InputView = () => {
	const stack = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

	return (
		<>
			<Title tag="h3">Input View</Title>
			<Stack data={stack} />
		</>
	);
};

export default InputView;

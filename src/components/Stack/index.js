import React from "react";

import "./Stack.css";

import { StackCell, StackCellNull } from "./StackCell";

const Stack = ({ data, displayTop = false, displayNull = true }) => {
	if (!data) return null;

	const list = [...data].reverse().map((value, i) => {
		const key = `${value}_${i}`;

		return <StackCell key={key}>{value}</StackCell>;
	});

	return (
		<article className={`stack ${displayTop ? "display-top" : ""}`}>
			<ul>
				{list}
				{displayNull && <StackCellNull />}
			</ul>
		</article>
	);
};

export default Stack;

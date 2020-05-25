import React from "react";

const StackCell = ({ children, ...otherProps }) => (
	<li className="stack-item" {...otherProps}>
		{children}
	</li>
);

const StackCellNull = () => <li className="stack-item null">null</li>;

export { StackCell, StackCellNull };

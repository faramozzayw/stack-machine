import React from "react";

const StackCell = ({ children, active, ...otherProps }) => (
	<li className={`stack-item ${active ? "active" : ""}`} {...otherProps}>
		<span>{children}</span>
	</li>
);

const StackCellNull = () => <li className="stack-item null">null</li>;

export { StackCell, StackCellNull };

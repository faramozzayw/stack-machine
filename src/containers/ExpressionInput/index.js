import React, { useState, useEffect } from "react";
import {
	Field,
	Control,
	Title,
	Select,
	Button,
	Input,
	Container,
} from "bloomer";

import { useStoreon } from "storeon/react";

import { operations } from "./operations";

import { addInstruction } from "./../../store/instructionsState/actions";

import { checkArg } from "./utils";

import "./ExpressionInput.css";

const checkArgCurrOperation = checkArg(operations);

const ExpressionInput = () => {
	const [currentOperation, updateOperaion] = useState(() => {
		return operations.values().next().value.text;
	});
	const [arg, updateArg] = useState("");
	const [hasArg, updateArgStatus] = useState(() => {
		return checkArgCurrOperation(currentOperation);
	});

	const { dispatch } = useStoreon();

	useEffect(() => {
		updateArgStatus(checkArgCurrOperation(currentOperation));
	}, [currentOperation]);

	const handleInput = event => {
		const { value } = event.target;

		updateArg(value);
	};

	const onCommit = e => {
		if ((hasArg && arg.trim() !== "") || !hasArg) {
			e.preventDefault();

			dispatch(addInstruction, {
				name: currentOperation,
				arg: hasArg ? Number(arg) : null,
				active: true,
			});

			console.log("Commit!");
		}
	};

	return (
		<Container className="ExpressionInput">
			<Title>Expression Input</Title>
			<form>
				<Field>
					<Control>
						<Select
							value={currentOperation}
							onChange={event => updateOperaion(event.target.value)}
						>
							{[...operations.values()].map(({ text }) => (
								<option value={text} key={text}>
									{text}
								</option>
							))}
						</Select>
						<Input
							value={arg}
							type="text"
							disabled={!hasArg}
							onChange={handleInput}
							required
						/>
						<Button type="submit" isColor="success" onClick={onCommit}>
							Commit!
						</Button>
					</Control>
				</Field>
			</form>
		</Container>
	);
};

export default ExpressionInput;

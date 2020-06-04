import React, { useState, useEffect } from "react";
import {
	Field,
	Control,
	Title,
	Select,
	Button,
	Input,
	Container,
	Help,
} from "bloomer";

import { useStoreon } from "storeon/react";

import { operations } from "./operations";

import { addInstruction } from "./../../store/instructionsState/actions";

import { checkArg } from "./utils";

import "./ExpressionInput.css";

const checkArgCurrOperation = checkArg(operations);

const ExpressionInput = () => {
	const [currentOperation, setOperaion] = useState(() => {
		return operations.values().next().value.text;
	});
	const [arg, setArg] = useState("");
	const [hasArg, setArgStatus] = useState(() => {
		return checkArgCurrOperation(currentOperation);
	});
	const [canCommit, setCanCommit] = useState(true);

	const { dispatch } = useStoreon();

	useEffect(() => {
		setArgStatus(checkArgCurrOperation(currentOperation));
	}, [currentOperation]);
	
	useEffect(() => {
		if(hasArg) {
			const argumentIsCorrect = !Number.isNaN(Number(arg));
			
			setCanCommit(argumentIsCorrect);
		} else {
			setCanCommit(true);
		}
	}, [hasArg, arg]);

	const handleSelect = event => {
		setOperaion(event.target.value);
	}

	const handleInput = event => {
		const { value } = event.target;
		
		setArg(value.trim());
	};

	const onCommit = e => {
		if ((hasArg && arg.trim() !== "") || !hasArg) {
			e.preventDefault();

			dispatch(addInstruction, {
				name: currentOperation,
				arg: hasArg ? Number(arg) : null,
				active: true,
			});
		}
	};
	const color = canCommit ? "success" : "danger";
	return (
		<Container className="ExpressionInput">
			<Title>Expression Input</Title>
			<form>
				<Field>
					<Control>
						<Select
							value={currentOperation}
							onChange={handleSelect}
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
						<Button
							type="submit"
							isColor={color}
							onClick={onCommit}
							disabled={!canCommit}
						>
							Commit!
						</Button>
					</Control>
					<Help
						isColor={color}
					>
						{
							canCommit ? 
							"Everything is awesome! 🎉":
							"Something bad wrong ☹️"
						}
					</Help>
				</Field>
			</form>
		</Container>
	);
};

export default ExpressionInput;

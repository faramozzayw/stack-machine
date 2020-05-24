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

import options from "./expressionConfig.json";

import { operations } from "./operations";

import "./ExpressionInput.css";

const checkArg = (operations) => (currentOperation) => {
  return operations.get(currentOperation)?.arg;
};

const ExpressionInput = () => {
  const [currentOperation, updateOperaion] = useState(options[0]?.text);
  const [arg, updateArg] = useState("");
  const [hasArg, updateArgStatus] = useState(
    checkArg(operations)(currentOperation)
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.info({ currentOperation, arg });
    }
  }, [currentOperation, arg]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.info({ hasArg });
    }
  }, [hasArg]);

  useEffect(() => {
    updateArgStatus(checkArg(operations)(currentOperation));
  }, [currentOperation]);

  const handleInput = (event) => {
    const { value } = event.target;

    updateArg(value);
  };

  const onCommit = (e) => {
    if ((hasArg && arg.trim() !== "") || !hasArg) {
      e.preventDefault();
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
              onChange={(event) => updateOperaion(event.target.value)}
            >
              {options.map(({ text }) => (
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

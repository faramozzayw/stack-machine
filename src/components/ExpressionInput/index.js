import React from "react";
import {
  Field,
  FieldBody,
  Label,
  Control,
  Title,
  Select,
  Button,
  Input,
} from "bloomer";

import options from "./expressionConfig.json";

import "./ExpressionInput.css";

const ExpressionInput = () => (
  <>
    <Title>Expression Input</Title>
    <form className="ExpressionInput">
      <Field>
        <Control>
          <Select>
            <option>push</option>
            <option>pop</option>
            <option>add</option>
            <option>mult</option>
          </Select>
          <Input type="text" required />
          <Button type="button">Commit!</Button>
        </Control>
      </Field>
    </form>
  </>
);

export default ExpressionInput;

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
  Container,
  Box,
} from "bloomer";

import options from "./expressionConfig.json";

import "./ExpressionInput.css";

const ExpressionInput = () => (
  <Container className="ExpressionInput">
    <Title>Expression Input</Title>
    <form>
      <Field>
        <Control>
          <Select>
            <option>push</option>
            <option>pop</option>
            <option>add</option>
            <option>mult</option>
          </Select>
          <Input type="text" required />
          <Button type="submit" isColor="success">
            Commit!
          </Button>
        </Control>
      </Field>
    </form>
  </Container>
);

export default ExpressionInput;

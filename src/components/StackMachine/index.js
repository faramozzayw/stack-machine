import React from "react";

//import { Container, Grid, Header, Segment, List } from "semantic-ui-react";

import { Title } from "bloomer";

import StackBox from "./StackBox";

const stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StackMachine = () => {
  return (
    <>
      <Title as="h3">Stack machine</Title>
      <ul>
        {stack.map((value) => (
          <li className="Stack">
            <StackBox>{value}</StackBox>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StackMachine;

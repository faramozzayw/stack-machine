import React from "react";

import { Container, Grid, Header, Segment, List } from "semantic-ui-react";

import StackBox from "./StackBox";

const stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StackMachine = () => {
  return (
    <Segment basic>
      <Header as="h3">Stack machine</Header>
      <List>
        {stack.map((value) => (
          <List.Item className="Stack">
            <StackBox>{value}</StackBox>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default StackMachine;

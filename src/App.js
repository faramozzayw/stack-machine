import React from "react";

import {
  ExpressionInput,
  /* Navbar, */ StackMachine,
  InputView,
} from "./components";

import {
  Hero,
  HeroHeader,
  HeroBody,
  Container,
  Title,
  Columns,
  Column,
} from "bloomer";

const App = () => {
  return (
    <Hero isColor="dark" isSize="medium" isFullHeight>
      <HeroHeader>
        <Title tag="h1" isSize={3}>
          StackMachine!
        </Title>
      </HeroHeader>

      <HeroBody>
        <Container hasTextAlign="centered">
          <ExpressionInput />
          <Columns>
            <Column>
              <StackMachine />
            </Column>
            <Column>
              <InputView />
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default App;

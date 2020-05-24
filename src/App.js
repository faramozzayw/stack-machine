import React from "react";

import {
  ExpressionInput,
  MainTitle,
  StackMachine,
  InputView,
} from "./components";

import { Hero, HeroBody, Container, Columns, Column } from "bloomer";

const App = () => {
  return (
    <Hero isColor="dark" isSize="small" isFullHeight>
      <MainTitle />

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

import React from "react";
import "./App.css";

import { Container, Grid, Header, Segment } from "semantic-ui-react";

import { ExpressionInput, Navbar, StackMachine, InputView } from "./components";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container fluid>
        <Grid columns={1} divided inverted>
          <Grid.Row centered>
            <ExpressionInput />
          </Grid.Row>
        </Grid>
        <Segment basic>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <StackMachine />
              </Grid.Column>
              <Grid.Column>
                <InputView />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

export default App;

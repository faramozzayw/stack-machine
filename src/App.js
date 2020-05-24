import React from "react";
import "./App.css";

import { Container, Grid, Header } from "semantic-ui-react";

import ExpressionInput from "./components/ExpressionInput";

const App = () => {
	return (
		<div className="App">
			<header>
				<Header
					color="red"
					dividing
					textAlign="left"
					style={{
						padding: "1rem",
						backgroundColor: "rgb(244, 244, 244)",
					}}
					as='h1'
				>Stack machine!</Header>
			</header>
			<Container>
				<Grid columns={1} divided>
					<Grid.Row centered>
						<ExpressionInput />
					</Grid.Row>
				</Grid>
				<Grid columns={2} divided>
					<Grid.Row>
						<Grid.Column>Stack Machine</Grid.Column>
						<Grid.Column>Input</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
};

export default App;

import React from 'react'
import { Form, Input, Dropdown, Segment, Header } from 'semantic-ui-react'

import options from "./expressionConfig.json";

const ExpressionInput = () => (
	<Segment style={{
		marginTop: "1rem"
	}} basic>
		<Header>Expression Input</Header>
		<Form>
			<Form.Field required>
				<Input
					label={
						<Dropdown placeholder="Actions" options={options} />
					}
					labelPosition="left"
					placeholder="Value"
					action={{
						content: "Commit",
						color: "green",
						basic: true,
					}}
				/>
			</Form.Field>
		</Form>
	</Segment>
)

export default ExpressionInput;
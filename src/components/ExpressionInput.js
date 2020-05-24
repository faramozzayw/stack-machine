import React from 'react'
import { Form, Input, Dropdown } from 'semantic-ui-react'

import options from "./expressionConfig.json";

const ExpressionInput = () => (
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
)

export default ExpressionInput;
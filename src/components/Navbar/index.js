import React from "react";

import { Header } from "semantic-ui-react";

const Navbar = () => (
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
);

export default Navbar;
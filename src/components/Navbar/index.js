import React from "react";

import { Header, Segment } from "semantic-ui-react";

const Navbar = () => (
  <header>
    <Segment inverted basic>
      <Header color="blue" textAlign="left" as="h1" inverted>
        Stack machine!
      </Header>
    </Segment>
  </header>
);

export default Navbar;

import React from "react";

import { HeroHeader, Title } from "bloomer";

import "./MainTitle.css";

const MainTitle = () => (
  <header>
    <HeroHeader>
      <Title tag="h1" isSize={3} className="MainTitle">
        StackMachine!
      </Title>
    </HeroHeader>
  </header>
);

export default MainTitle;

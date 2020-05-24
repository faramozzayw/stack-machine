import React from "react";

import { Title } from "bloomer";

import { Stack } from "./..";

const stack = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const StackMachine = () => {
  return (
    <>
      <Title as="h3">Stack machine</Title>
      <Stack data={stack} />
    </>
  );
};

export default StackMachine;

import React from "react";

import { Title } from "bloomer";

import { Stack } from "./..";

const StackMachine = () => {
  const stack = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <>
      <Title>Stack machine</Title>
      <Stack data={stack} />
    </>
  );
};

export default StackMachine;

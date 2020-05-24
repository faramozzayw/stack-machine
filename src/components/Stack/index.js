import React from "react";

import "./Stack.css";

import StackCell from "./StackCell";

const Stack = ({ data }) => {
  if (!data) return null;

  const list = [...data].reverse().map((value, i) => {
    const key = `${value}_${i}`;

    return <StackCell key={key}>{value}</StackCell>;
  });

  return (
    <article className="stack">
      <ul>
        {list}
        <StackCell>null</StackCell>
      </ul>
    </article>
  );
};

export default Stack;

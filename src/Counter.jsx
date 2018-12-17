import React, { Component, useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}> Increment Count +1</button>
      <p>{count}</p>
    </>
  );
};

export default Counter;

import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sudan");
  console.log("im parent");
  return (
    <div>
      <Child name={ name } />
      <br />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <button
        onClick={() => {
          setName("nadus");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Parent;
//to remove unnecessary rendering of parent use memo in the child component such that the child component renders only if there is changes in child component props

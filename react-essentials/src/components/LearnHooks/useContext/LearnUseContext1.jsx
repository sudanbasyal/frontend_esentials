import React, { useContext } from "react";
import { Context } from "../../../App";

const LearnUseContext1 = () => {
  let value = useContext(Context);

  return (
    <div>
      <p>Name: {value.name}</p>
      <p>Age: {value.age}</p>
      <button
        onClick={() => {
          value.setName("basyal");
          value.setAge(24);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default LearnUseContext1;

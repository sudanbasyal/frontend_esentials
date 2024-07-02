import React, { useReducer } from "react";

const LearnUseReducer2 = () => {
  const reducer = (state, action) => {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {state}
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default LearnUseReducer2;

import React, { act, useReducer } from "react";

const LearnUseReducer1 = () => {
  // state_variable   (initial value)
  const reducer = (state, action) => {
    return action;
  };
  const [state, dispatch] = useReducer(reducer, "sudan"); //variable definition dispatch is used for changing variable
  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch("ram");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default LearnUseReducer1;

//there is another way to make variable in react
// ->useState and useReducer
//for primitive data types useState
//for array and object useReducer
//if dispatch is called reducer function is called and that function is executed

//useReducer-> component will render if dispatch is called

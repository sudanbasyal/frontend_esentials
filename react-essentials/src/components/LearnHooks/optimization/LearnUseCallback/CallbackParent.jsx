import React, { useCallback, useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackParent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sudan");
  console.log("im callback parent");
  //   const func1 = () => {
  //     console.log("function 1");
  //   };
  const func1 = useCallback(() => {
    console.log("function 1");
  }, []);
  return (
    <div>
      <CallbackChild name={name} func1={func1} />
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

export default CallbackParent;
//to remove unnecessary rendering of parent use memo in the child component such that the child component renders only if there is changes in child component props
//for function the case is not the same so we must use useCallback function
//return is not necessary in useCallback primarily to handle unnecessary rendering of function props

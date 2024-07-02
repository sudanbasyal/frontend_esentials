import React, { memo } from "react";

const CallbackChild = ({ name }) => {
  console.log("im callback child");
  return <div>Name:{name}</div>;
};

export default memo(CallbackChild);

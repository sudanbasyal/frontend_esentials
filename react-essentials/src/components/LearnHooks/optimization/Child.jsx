import React, { memo } from "react";

const Child = ({name}) => {
  console.log("im child");
  return <div>Name:{name}</div>;
};

export default memo(Child);

import React from "react";

const AddToSessionStorage = () => {
  const token = "12345";
  sessionStorage.setItem("token", token);
  return <div>AddToSessionStorage</div>;
};

export default AddToSessionStorage;

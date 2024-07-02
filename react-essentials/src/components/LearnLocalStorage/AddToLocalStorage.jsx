import React from "react";

const AddToLocalStorage = () => {
  const token = "123456";
  localStorage.setItem("token", token);
  return <div>AddToLocalStorage</div>;
};

export default AddToLocalStorage;

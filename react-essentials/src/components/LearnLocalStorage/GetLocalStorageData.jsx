import React from "react";

const GetLocalStorageData = () => {
  console.log(localStorage.getItem("token"));
  return <div>GetLocalStorageData</div>;
};

export default GetLocalStorageData;

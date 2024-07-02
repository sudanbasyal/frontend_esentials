import React from "react";

const GetSessionStorageData = () => {
  console.log(sessionStorage.getItem("token"));
  return <div>GetSessionStorageData</div>;
};

export default GetSessionStorageData;

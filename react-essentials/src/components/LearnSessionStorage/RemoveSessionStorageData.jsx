import React from "react";

const RemoveSessionStorageData = () => {
  return (
    <div>
      <button
        onClick={() => {
          sessionStorage.removeItem("token");
        }}
      >
        Remove Token
      </button>
    </div>
  );
};

export default RemoveSessionStorageData;

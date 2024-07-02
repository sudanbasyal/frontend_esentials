import React from "react";

const RemoveLocalStorageData = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Button clicked");
          if (localStorage.getItem("token")) {
            console.log("Token exists in local storage");
            localStorage.removeItem("token");
            console.log("Token removed");
          } else {
            console.log("Token does not exist in local storage");
          }
        }}
      >
        Remove token
      </button>
    </div>
  );
};

export default RemoveLocalStorageData;

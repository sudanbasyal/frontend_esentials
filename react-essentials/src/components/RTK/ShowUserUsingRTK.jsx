import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../services/api/userService";

const ShowUserUsingRTK = () => {
  const params = useParams();
  const {
    isLoading: isLoadingReadUser,
    isSuccess: isSuccessReadUser,
    isError: isErrorReadUser,
    error: errorReadUser,
    data: dataReadUser,
  } = useGetUserQuery(params.id);
  const user = dataReadUser?.user || {};
  useEffect(() => {
    if (!isErrorReadUser) {
      console.log("User Undefined", errorReadUser?.error);
    }
  }, [isErrorReadUser, errorReadUser?.error]);
  return (
    <div>
      {isLoadingReadUser ? (
        <div>
          <h1>Reading User...</h1>
        </div>
      ) : (
        <div
          key={user.id}
          style={{
            border: "2px solid black",
            margin: "2px 500px",
          }}
        >
          <p>User Id: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>CreatedAt: {new Date(user.createdAt).toLocaleString()}</p>
          <p>User Role: {user.roles}</p>
        </div>
      )}
    </div>
  );
};

export default ShowUserUsingRTK;

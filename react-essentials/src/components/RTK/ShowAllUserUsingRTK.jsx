import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
} from "../../services/api/userService"; // Correct import path

const ShowAllUserUsingRTK = () => {
  const {
    isError: isErrorShowUsers,
    isSuccess: isSuccessShowUsers,
    isLoading: isLoadingShowUsers,
    data: dataShowUsers,
    error: errorShowUsers,
  } = useGetAllUsersQuery();
  const {
    isError: isErrorShowUserById,
    isSuccess: isSuccessShowUserById,
    isLoading: isLoadingShowUserById,
    data: dataShowUserById,
    error: errorShowUserById,
  } = useGetUserQuery();
  const [
    deleteUser,
    {
      isError: isErrorDeleteUser,
      isSuccess: isSuccessDeleteUser,
      isLoading: isLoadingDeleteUser,
      data: dataDeleteUser,
      error: errorDeleteUser,
    },
  ] = useDeleteUserMutation();
  useEffect(() => {
    if (!isErrorShowUsers) {
      console.log("Users Undefined", errorShowUsers?.error);
    }
    if (!isErrorDeleteUser) {
      console.log("Delete User undefined", errorDeleteUser?.error);
    }
    if (!isErrorShowUserById) {
      console.log("User by id undefined", errorShowUserById?.error);
    }
  }, [
    isErrorShowUsers,
    errorShowUsers?.error,
    errorDeleteUser?.error,
    errorShowUserById?.error,
  ]);
  useEffect(() => {
    if (isSuccessDeleteUser) {
      console.log("User Deleted Successfully");
    }
  }, [isSuccessDeleteUser]);
  const navigate = useNavigate();
  let allUsers = dataShowUsers?.users; //to avoid undefined error we give or and provide an empty array
  return (
    <div>
      {isLoadingShowUsers ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          {/* always use option chaining to handle undefined error ?.*/}
          {allUsers?.map?.((value, i) => (
            <div
              key={i}
              style={{ border: "2px solid red", marginBottom: "20px" }}
            >
              <p>Username: {value.username}</p>
              <p>Email: {value.email}</p>
              <button
                onClick={async () => {
                  try {
                    await deleteUser(value.id);
                  } catch (error) {
                    console.error("failed to delete");
                  }
                }}
              >
                DELETE
              </button>
              <button onClick={() => navigate(`/users/${value.id}`)}>
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllUserUsingRTK;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUserDetails = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const getUserDetails = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: `http://localhost:3000/api/v1/user/${params.id}`,
      });
      // console.log(result.data.user);
      setUser(result.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
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
  );
};

export default ShowUserDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ShowAllUser = () => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const getUsers = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/api/v1/user/getall",
    });
    setAllUsers(response.data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {allUsers.map((value, i) => {
        return (
          <div
            key={i}
            style={{ border: "2px solid red", marginBottom: "20px" }}
          >
            <p>Username: {value.username}</p>
            <p>Email: {value.email}</p>
            <button
              onClick={async () => {
                try {
                  await axios({
                    method: "DELETE",
                    url: `http://localhost:3000/api/v1/user/${value.id}`,
                  });
                  getUsers();
                } catch (error) {
                  console.log("error");
                }
              }}
            >
              DELETE
            </button>
            <button
              onClick={async () => {
                navigate(`/users/${value.id}`);
              }}
            >
              View
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllUser;

//  {allUsers.map((value, i) => {
//   return (
//     <div
//       key={i}
//       style={{ border: "2px solid red", marginBottom: "20px" }}
//     >
//       <p>Id: {value.id}</p>
//       <p>Username: {value.username}</p>
//       <p>Email: {value.email}</p>
//       <p>Roles: {value.roles}</p>
//       <button
//         onClick={async () => {
//           await axios({
//             method: "DELETE",
//             url: `http://localhost:8000/api/v1/user/${value.id}`,
//           });
//           getUsers();
//         }}
//       >
//         DELETE
//       </button>
//     </div>
//   );
// })

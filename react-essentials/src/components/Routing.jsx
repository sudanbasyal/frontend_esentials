import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LoginUser from "./LoginUser";
import ShowAllUser from "./ShowAllUser";
import ShowUserDetails from "./ShowUserDetails";
import CreateUser from "./CreateUser";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeName } from "../features/infoSlice";
import { changeCity, changeProvince } from "../features/addressSlice";
import ShowAllUserUsingRTK from "./RTK/ShowAllUserUsingRTK";
import ShowUserUsingRTK from "./RTK/ShowUserUsingRTK";
import CreateUserUsingRTK from "./RTK/CreateUserUsingRTK";

const Routing = () => {
  const dispatch = useDispatch();
  const info = useSelector((store) => {
    return store.info;
  });
  const addressData = useSelector((store) => {
    return store.address;
  });
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        ></Route>
        <Route index element={<div>Home Page</div>}></Route>
        <Route path="login" element={<LoginUser></LoginUser>}></Route>
        <Route
          path="users"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          {/* <Route index element={<ShowAllUser></ShowAllUser>}></Route> */}
          <Route
            index
            element={<ShowAllUserUsingRTK></ShowAllUserUsingRTK>}
          ></Route>
          {/* <Route
            path=":id"
            element={<ShowUserDetails></ShowUserDetails>}
          ></Route> */}
          <Route
            path=":id"
            element={<ShowUserUsingRTK></ShowUserUsingRTK>}
          ></Route>
          {/* <Route path="create" element={<CreateUser></CreateUser>}></Route> */}
          <Route path="create" element={<CreateUserUsingRTK></CreateUserUsingRTK>}></Route>
        </Route>
        <Route path="template" element={<div>Hello</div>}></Route>
      </Routes>
      {/* <div>
        <p>Name:{info.name}</p>
        <p>Age:{info.age}</p>
        <p>City:{addressData.city}</p>
        <p>Province:{addressData.province}</p>
      </div>
      <button
        onClick={() => {
          dispatch(changeName("hari"));
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          dispatch(changeAge(24));
        }}
      >
        Change Age
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(changeCity("pokhara"));
        }}
      >
        Change CIty
      </button>
      <button
        onClick={() => {
          dispatch(changeProvince(4));
        }}
      >
        Change Province
      </button>
      <br /> */}
    </div>
  );
};

export default Routing;

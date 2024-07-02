import React from "react";
import { NavLink } from "react-router-dom";
const NaviBar = () => {
  return (
    <div>
      <nav style={{ border: "2px solid black", textAlign: "center" }}>
        <NavLink to="/users" style={{ marginLeft: "20px" }}>
          Users
        </NavLink>
        <NavLink to="/users/create" style={{ marginLeft: "20px" }}>
          Create User
        </NavLink>
        {/* <NavLink to="/users/re" style={{ marginLeft: "20px" }}>
      Read Users
    </NavLink> */}
      </nav>
    </div>
  );
};

export default NaviBar;

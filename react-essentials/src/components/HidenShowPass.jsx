import React, { useState } from "react";

const HidenShow = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  return (
    <div>
      <form>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={type}
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="button" onClick={() => setType("text")}>
          Show
        </button>
      </form>
    </div>
  );
};

export default HidenShow;

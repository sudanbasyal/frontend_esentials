import React, { useMemo, useState } from "react";

const UseMemoParent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sudan");
  const [surname, setSurname] = useState("basyal");
  // const fullName = name + " " + surname;//this adds severe complexity in the code as fullName is initialized on each render even when name and surname are not changed so the alternative for this is useMemo Hook.
  const fullName = useMemo(() => {
    return name + " " + surname; //return is must
  }, [name, surname]);
  return (
    <div>
      count is {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <br />
      <button
        onClick={() => {
          setName("sandip");
        }}
      >
        Change Name
      </button>
      <br />
      <button
        onClick={() => {
          setSurname("shrestha");
        }}
      >
        Change Surname
      </button>
      <br />
      {fullName}
    </div>
  );
};

export default UseMemoParent;

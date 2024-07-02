import React, { useRef } from "react";

const LearnUseRef1 = () => {
  const inputRef = useRef();
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        {/* attaching ref */}
        <input id="name" ref={inputRef} /> <br />
        <button
          type="button"
          onClick={() => {
            inputRef.current.focus();
            inputRef.current.style.border = '1px solid red'
          }}
        >
          Click Me
        </button>
      </form>
    </div>
  );
};

export default LearnUseRef1;

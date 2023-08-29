import React, { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");
  const changeName = () => {
    setTitle(inputRef.current.value);
    inputRef.current.value = "";
  };
  const buttonStyle = {
    border: "none",
    color: "white",
    backgroundColor: "black",
    borderRadius: "20px",
    fontSize: "20px",
    margin: "10px",
    padding: "10px",
  };
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        Your Name is {title}
      </h1>
      <div style={{
        display:'flex',
        justifyContent:"center"
      }}>
        <input
          style={{
            ...buttonStyle,
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
          }}
          placeholder="Enter Name"
          ref={inputRef}
        />
        <button style={buttonStyle} onClick={changeName}>
          Change Name
        </button>
      </div>
    </>
  );
};

export default UseRef;

import React, {useState} from 'react'


const UseState = () => {
    const [count, setCount] = useState(0)
    const buttonStyle = {
            border: "none",
            color: "white",
            backgroundColor: "black",
            borderRadius: "20px",
            fontSize: "20px",
            margin: "10px",
            padding: "10px",
          }
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>{count}</h1>
      <div
        className="btns"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default UseState
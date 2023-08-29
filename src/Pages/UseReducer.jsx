import React, {useReducer} from 'react'

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count+1, showText: !state.showText}
        case "DECREMENT":
            return {count: state.count-1, showText: !state.showText}
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 
        {count: 0, showText:true})
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
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>{state.count}</h1>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        {state.showText ? "Even" : "Odd"}
      </h1>
      <div
        className="btns"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default UseReducer
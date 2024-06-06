import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function increment(params) {
    setCount((count) => count + 1);
  }
  function decrement(params) {
    setCount((count) => count - 1);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <div
        style={{
          width: "60%",
          height: "300px",
          margin: "auto",
          background: "yellow",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "90px" }}>{count}</h2>
        <button
          style={{
            width: "50%",
            margin: "auto",
            padding: "10px 20px",
            borderRadius: "15px",
            border: "none",
          }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{
            width: "50%",
            margin: "auto",
            padding: "10px 20px",
            borderRadius: "15px",
            border: "none",
          }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;

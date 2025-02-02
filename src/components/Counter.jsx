import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }
  function handleDec() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="container mx-auto my-5 py-4 bg-slate-700 text-white">
      <h1 className="mb-3 text-3xl">Counter : {count}</h1>
      <div className="text-lg">
        <button onClick={handleInc} className="me-3">
          Increment
        </button>
        <button onClick={handleDec} className="me-3">
          Decrement
        </button>
        <button onClick={handleReset} className="me-3">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

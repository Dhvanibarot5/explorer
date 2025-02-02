import React, { useState } from "react";

function MouseEvents() {
  const [message, setMessage] = useState("Hover or Click");

  return (
    <div className="container mx-auto my-5 py-4 bg-slate-700 text-white flex flex-col gap-4 items-center justify-center">
      <p>{message}</p>
      <div
        className="w-20 h-20 bg-slate-500 flex items-center justify-center text-black rounded-lg cursor-pointer"
        onMouseEnter={() => setMessage("You Hovered!")}
        onMouseLeave={() => setMessage("Hover Me!")}
        onDoubleClick={() => setMessage("Double Clicked!")}
        onClick={() => setMessage("Clicked!")}
        onMouseDown={() => setMessage("Mouse Down!")}
      >
        Hover or click Me
      </div>
    </div>
  );
}

export default MouseEvents;

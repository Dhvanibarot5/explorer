import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container mx-auto my-5 py-4 bg-slate-700 text-white">
      {/* <h1>Question:</h1> */}
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Question:" : "Question:"}</button>
      {isVisible && <p>Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
    </div>
  );
}

export default ToggleText;

import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  return (
    <div className="container mx-auto my-5 py-4 bg-slate-700 text-black">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p className="text-lg text-white">text : {text}</p>
    </div>
  );
}

export default InputField;

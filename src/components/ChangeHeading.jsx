import React, { useState } from "react";

function ChangeHeading() {
  const [heading, setHeading] = useState("Lorem Ipsum");

  function changeHeading() {
    setHeading("My Paragraph");
  }

  return (
    <div className="container mx-auto my-5 py-4 bg-slate-700 text-white">
      <h1 className="text-2xl">{heading}</h1>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, officia facere. Labore quod harum qui neque consectetur, cumque et
        necessitatibus!
      </p>
      <button onClick={changeHeading} className="bg-black p-2">
        Change Heading
      </button>
    </div>
  );
}

export default ChangeHeading;

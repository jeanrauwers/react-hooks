import React, { useState } from "react";

const Light = () => {
  const [isOn, setOn] = useState(false);

  const toggleLight = () => {
    setOn(previsOn => !previsOn);
  };

  return (
    <>
      <h2>Toggle light</h2>
      <div
        style={{
          height: "50px",
          width: "50px",
          background: isOn ? "yellow" : "gray"
        }}
        alt="flashlight"
        onClick={toggleLight}
      />
    </>
  );
};

export default Light;

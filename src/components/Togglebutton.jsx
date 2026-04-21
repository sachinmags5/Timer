import React, { useState } from "react";

const Togglebutton = () => {
  const [label, setLabel] = useState(true);

  const handleChange = () => {
    setLabel(prev => {
      const newValue = !prev;
      console.log("updated label:", newValue);
      return newValue;
    });
  };

  return (
    <div>
      <button onClick={handleChange}>
        {label ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Togglebutton;
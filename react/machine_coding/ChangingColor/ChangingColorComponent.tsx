import { useState } from "react";
import("./ChangingColorComponent.css");

const ChangingColorComponent = () => {
  const [color, setColor] = useState("#fff");
  const handleSetColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h1>ChangingColorComponent.tsx</h1>
      <div
        style={{
          backgroundColor: color,
          height: "500px",
          width: "500px",
          marginBottom: "20px",
          border: "1px solid black",
        }}
      ></div>
      <input type="color" value={color} onChange={handleSetColor} />
    </div>
  );
};

export default ChangingColorComponent;

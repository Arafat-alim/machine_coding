import { useEffect, useState } from "react";

const RandomColorCounterComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const handleCount = () => {
    setCount((prev) => prev + 3);
  };

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  };

  useEffect(() => {
    //   when counter change then change background color to random. please create this feature
    setColor(generateRandomColor());
  }, [count]);

  console.log("color", color);

  return (
    <div>
      <div
        style={{ height: "500px", width: "500px", backgroundColor: color }}
      ></div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Click me </button>
    </div>
  );
};

export default RandomColorCounterComponent;

import { useState, useEffect } from "react";

const BlackSquaresComponent = () => {
  const totalSquares = 60;
  const rows = 6;
  const cols = totalSquares / rows;

  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState(Array(totalSquares).fill("black"));

  useEffect(() => {
    if (counter < totalSquares) {
      const timer = setTimeout(() => {
        setColors((prev) => {
          const newSquares = [...prev];
          newSquares[counter] = "gold";
          return newSquares;
        });
        setCounter((prev) => prev + 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setColors(Array(totalSquares).fill("black"));
        setCounter(0);
      }, 0);
    }
  }, [counter]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 30px)`,
        gap: "10px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            height: "30px",
            width: "30px",
            backgroundColor: color,
            border: "1px solid #ccc",
          }}
        ></div>
      ))}
    </div>
  );
};

export default BlackSquaresComponent;

import { useState } from "react";
import "./CounterFunctionComponent.css";

const CounterFunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Hello, {props.name || "World"}</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default CounterFunctionComponent;

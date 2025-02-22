import { useState } from "react";

const BatchingComponent = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1); // Batched: ignored
    setCount(count + 2); // Batched: ignored
    setCount(count + 3); // Batched: ignored
    setCount(count + 4); // Considered.
    console.log("Count__", count); //  Still stale here due to async update, 0
  };

  console.log("Counting___2", count); // Updated count after re-render, 4
  return (
    <div>
      <h1>Automatic Batching</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default BatchingComponent;

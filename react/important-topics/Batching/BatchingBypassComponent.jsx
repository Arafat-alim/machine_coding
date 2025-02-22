import { useState } from "react";
import ReactDOM from "react-dom";

const BatchingBypassComponent = () => {
  const [count, setCount] = useState(0);

  // Automatic Batching
  const handleCount = () => {
    //   ReactDOM.flushSync(() => {})
    ReactDOM.flushSync(() => {
      setTimeout(() => {
        setCount(count + 1);
        console.log("count___outside__", count); // 0
        setTimeout(() => {
          setCount(count + 5);
          console.log("count___inside__", count); // 0
        }, 1000);
      }, 1000);
    });
    console.log("CounterValue_", count); // ran twice, count =1 and then count=5
  };

  console.log("Counte____1", count); // 5
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default BatchingBypassComponent;

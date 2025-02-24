import { useEffect, useState } from "react";
import "./ProgressBarComponent.css";

const ProgressBarComponent = () => {
  const bars = [0, 10, 20, 30, 40, 50, 70, 90, 100];
  return (
    <div>
      {bars.map((value) => (
        <ProgressBar progress={value} key={value} />
      ))}
    </div>
  );
};

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setAnimatedProgress(progress);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //   width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: `${progress > 4 ? "white" : "black"}`,
        }}
        role="progressBar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBarComponent;

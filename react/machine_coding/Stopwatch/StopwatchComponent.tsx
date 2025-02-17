import { useEffect, useRef, useState } from "react";

const StopwatchComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const stopwatchRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      stopwatchRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(stopwatchRef.current);
    }

    return () => clearInterval(stopwatchRef.current);
  }, [isPlaying]);

  const startPlay = () => {
    setIsPlaying(true);
  };
  const pausePlay = () => {
    setIsPlaying(false);
  };
  const resetTimer = () => {
    clearInterval(stopwatchRef.current);
    setSeconds(0);
    setIsPlaying(false);
  };

  const formatTime = (timeInSeconds) => {
    const hour = Math.floor(timeInSeconds / 3600);
    const min = Math.floor((timeInSeconds % 3600) / 60);
    const second = timeInSeconds % 60;

    return `${hour.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch">
      <div className="stopwatch-display">
        <p>{formatTime(seconds)}</p>
      </div>
      <div className="stopwatch-control">
        <button onClick={startPlay}>Play</button>
        <button onClick={pausePlay}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchComponent;

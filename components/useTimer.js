import { useEffect, useState } from "react";

const useTimer = (startTime, decrementCount = 1) => {
  const [timer, setTimer] = useState(startTime);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((timer) => timer - decrementCount);
      }, 1000 * decrementCount);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  return [timer, setTimer];
};

export default useTimer;

import { useEffect, useRef, useState } from "react";
import { Timer as TimerProps, useTimersContext } from "../store";
import { Container } from "./UI";

export const Timer = ({ name, duration }: TimerProps) => {
  const intervalRef = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning === true) {
      timer = intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) =>
          prevTime > 0 ? prevTime - 50 : prevTime
        );
      }, 50);
      intervalRef.current = timer;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
};

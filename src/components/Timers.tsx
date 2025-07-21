import { useTimersContext } from "../store";
import { Timer } from "./Timer";

export const Timers = () => {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timer) => (
        <li key={timer.name}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
};

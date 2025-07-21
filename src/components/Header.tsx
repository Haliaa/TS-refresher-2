import { useContext } from "react";
import { Button } from "./UI";
import { TimersContext, useTimersContext } from "../store";

export const Header = () => {
  const timersCtx = useTimersContext();
  // const timerscCtx = useContext(TimersContext);

  // if (!timerscCtx) {
  //   //or useContext(TimersContext)! -> to ensure TS the context is not null
  //   throw new Error("Header must be used within a TimersContextProvider"); //never happens (because initial values are set in the context provider)
  // }

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
};

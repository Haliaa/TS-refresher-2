import { Timer as TimerProps } from "../store";
import { Container } from "./UI";

export const Timer = ({ name, duration }: TimerProps) => {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
};

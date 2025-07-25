import { ComponentPropsWithRef } from "react";

type Props = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

export const Input = ({ id, label, ...props }: Props) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} style={{ marginInline: "0.5em" }} />
    </p>
  );
};

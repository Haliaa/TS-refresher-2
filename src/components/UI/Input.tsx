import { ComponentPropsWithRef } from "react";

type Props = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

export const Input = ({ id, label, ...props }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

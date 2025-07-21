import {
  ComponentPropsWithoutRef,
  forwardRef,
  type ComponentPropsWithRef,
} from "react";

// type InputProps = {
//   label: string;
//   id: string;
// }& ComponentPropsWithoutRef<"input">;

// export const Input = ({ label, id, ...props }: InputProps) => {
//   return (
//     <p>
//       <label htmlFor={id}>{label}</label>
//       <input id={id} {...props} />
//     </p>
//   );
// };
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }: InputProps, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} ref={ref} {...props} />
      </p>
    );
  }
);

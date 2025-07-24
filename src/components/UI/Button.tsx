import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps as ButtonLinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & {
    to?: never;
  };
type LinkProps = ButtonLinkProps &
  BaseProps & {
    to: string;
  };
type Props = ButtonProps | LinkProps;

const isLinkProps = (props: Props): props is LinkProps => {
  return "to" in props;
};

export const Button = (props: Props) => {
  const customClasses = "button" + (props.textOnly ? "button--text-only" : "");
  if (isLinkProps(props)) {
    const { children, textOnly, ...elseProps } = props;
    return (
      <Link className={customClasses} {...elseProps}>
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...elseProps } = props;
  return (
    <button className={customClasses} {...elseProps}>
      {children}
    </button>
  );
};

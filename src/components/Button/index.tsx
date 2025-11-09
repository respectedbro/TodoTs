import React from "react";

import "../Button/style.css";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color: "orange" | "blue" | "red";
}
export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  ...props
}) => {
  const className = `button_${color}`;

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

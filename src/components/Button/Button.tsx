import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

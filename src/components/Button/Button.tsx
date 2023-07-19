import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { onClick, disabled, label } = props;

  return (
    <button onClick={onClick} disabled={disabled}>
      <img src="/src/shared/assets/demo.svg" alt="A Rectangle Image with SVG" />
    </button>
  );
}

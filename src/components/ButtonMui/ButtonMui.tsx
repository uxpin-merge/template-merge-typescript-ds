import React from "react";
import ButtonM from '@mui/material/Button';

interface ButtonProps {
  children: string;
  variant: 'contained' | 'outlined' | 'text';
  onClick(): void;
}

export default function ButtonMui(props: ButtonProps) {
  return (
    <ButtonM {...props} >
      {props.children}
    </ButtonM>
  );
}

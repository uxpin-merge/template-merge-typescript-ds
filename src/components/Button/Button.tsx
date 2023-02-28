import React from "react";
import {Button as ButtonM} from '@mui/material';



interface ButtonProps {
  /**
  * Content of the button
  * @uxpinpropname Label
  * */
  children: string;
  variant: 'contained' | 'outlined' | 'text';
  onClick(): void;
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonM {...props} >
      {props.children}
    </ButtonM>
  );
}

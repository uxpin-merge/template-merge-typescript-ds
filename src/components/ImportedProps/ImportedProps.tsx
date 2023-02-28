import React from "react";
import {Button as ButtonM, ButtonProps} from '@mui/material';


export default function ImportedProps(props: ButtonProps) {
  return (
    <ButtonM {...props} >
      {props.children}
    </ButtonM>
  );
}

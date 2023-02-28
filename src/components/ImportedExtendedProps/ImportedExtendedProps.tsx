import React from "react";
import {Button as ButtonM, ButtonProps} from '@mui/material';

/**
* Extend interface and remove 'classes' and 'style' props
**/
interface MergeButtonProps extends Omit<ButtonProps, "classes" | "style"> {
  // ... Add additional props 
  newProp: string
}

export default function ImportedExtendedProps(props: MergeButtonProps) {
  return (
    <ButtonM {...props} >
      {props.children}
    </ButtonM>
  );
}

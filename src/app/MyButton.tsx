import React from 'react';

import Button, { ButtonProps } from '@mui/material/Button';

type Props = ButtonProps;

const MyButton = ({ variant, color, ...props }: Props) => (
  <Button variant={variant} color={color}>
    {props.children}
  </Button>
);

export default MyButton;

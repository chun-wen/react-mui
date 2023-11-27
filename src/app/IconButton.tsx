import React from 'react';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button, { ButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const TestButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(12),
  borderRadius: theme.spacing(2),
  border: '2px solid red',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:active': {
    backgroundColor: theme.palette.action.active,
  },
  '&:focus': {
    backgroundColor: theme.palette.action.focus,
  },
  '&:disabled': {
    backgroundColor: theme.palette.action.disabled,
  },
  color: theme.palette.text.secondary,
}));

export default function AddPhoto({ onClick }: ButtonProps) {
  return (
    <>
      <TestButton>121231</TestButton>
      <IconButton aria-label='delete' onClick={onClick}>
        <AddAPhotoIcon />
      </IconButton>
    </>
  );
}

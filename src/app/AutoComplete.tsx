import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import MyButton from './MyButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Test = () => {
  return (
    <>
      <MyButton>按钮</MyButton>
      <Stack direction='column' spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 1</Item>
      </Stack>
    </>
  );
};

export default Test;

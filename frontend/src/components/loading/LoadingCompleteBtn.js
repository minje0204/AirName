import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function LoadBtn() {
  return (
    <Button
      variant="contained"
      color="warning"
      size="large"
      component={Link}
      to="/namecard"
      style={{ width: '50px ' }}
    >
      <span>▶</span>
    </Button>
  );
}

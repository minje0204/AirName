import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function SubmitBtn() {
  return (
    <Button
      variant="contained"
      color="warning"
      size="large"
      component={Link}
      to="/loading"
      style={{ width: '50px ' }}
      sx={{ m: 2 }}
    >
      <span style={{ fontSize: '20px' }}>▶</span>
    </Button>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function StartBtn({ title, subtitle, to }) {
  return (
    <div>
      {subtitle}
      <br />
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to={to}
        style={{ width: '300px ' }}
      >
        <span style={{ fontSize: '20px' }}>{title}</span>
      </Button>
    </div>
  );
}

export default StartBtn;

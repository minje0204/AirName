import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function StartBtn({ title, subtitle, to }) {
  return (
    <div>
      <div style={{ marginBottom: '5px' }}>{subtitle}</div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to={to}
      >
        <span style={{ fontSize: '20px', color: 'white' }}>{title}</span>
      </Button>
    </div>
  );
}

export default StartBtn;

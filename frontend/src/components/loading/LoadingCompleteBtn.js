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
      to="/rcmnd"
    >
      <span>요정이 추천해준 이름 보러가기</span>
    </Button>
  );
}

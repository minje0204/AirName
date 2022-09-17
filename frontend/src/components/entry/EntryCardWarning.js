import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function InputAlert() {
  return (
    <Box sx={{ width: '100%' }}>
      <Alert severity="warning" sx={{ m: 2 }}>
        영어이름 리포트를 조회하기 위해서 <br />
        이름과 태어난 해를 입력해주세요 !
      </Alert>
    </Box>
  );
}

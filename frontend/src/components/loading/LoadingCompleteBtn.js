import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function LoadBtn({ btnVisiblity }) {
  const nameEn = localStorage.getItem('username');
  return (
    <>
      {nameEn ? (
        <Button
          variant="contained"
          color="warning"
          size="large"
          component={Link}
          to={`/finreport/${nameEn}`}
          style={{
            visibility: btnVisiblity,
            marginTop: '10px'
          }}
        >
          <span>내 영어 이름 리포트 보러가기</span>
        </Button>
      ) : (
        <Button
          variant="contained"
          color="warning"
          size="large"
          component={Link}
          to="/rcmnd"
          style={{
            visibility: btnVisiblity,
            marginTop: '10px'
          }}
        >
          <span>요정이 추천해준 이름 보러가기</span>
        </Button>
      )}
    </>
  );
}

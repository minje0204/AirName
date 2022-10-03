import React from 'react';
import LinkButton from 'components/LinkButton';

export default function LoadBtn({ wait }) {
  const nameEn = localStorage.getItem('username');
  const birth = localStorage.getItem('birth');
  return (
    <>
      {nameEn ? (
        <LinkButton
          content="내 영어 이름 리포트 보러가기"
          to={`/finreport/${nameEn}/${birth}`}
          style={{
            marginTop: '10px'
          }}
        />
      ) : (
        <LinkButton
          content="추천된 영어이름 보러가기"
          to="/rcmnd"
          disabled={wait}
          style={{
            marginTop: '10px'
          }}
        />
      )}
    </>
  );
}

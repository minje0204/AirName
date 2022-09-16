import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

// 카카오톡 공유하기 버튼
function FinBtns() {
  useEffect(() => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: 'AIR NAME',
        description: '#영어이름 #알잘딱깔센',
        imageUrl: 'https://ifh.cc/g/PBX9v2.png',
        link: {
          mobileWebUrl: 'https://blog.naver.com/2riing/',
          webUrl: 'https://blog.naver.com/2riing/'
        }
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://blog.naver.com/2riing/',
            webUrl: 'https://blog.naver.com/2riing/'
          }
        }
      ]
    });
  });
  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <Button variant="contained">티켓 이미지로 저장</Button>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
        <Button variant="contained" className="Kakao" id="kakao-link-btn">
          리포트 카카오톡 공유하기
        </Button>
      </FinBtnsWrapper>
    </StyledWrapper>
  );
}

export default FinBtns;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
  margin: 20px;
`;

const FinBtnsWrapper = styled.div`
  margin: 20px;
`;

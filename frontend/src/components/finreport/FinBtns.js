import React, { useEffect } from 'react';
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
  }, []);
  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <button variant="contained" id="img-save-btn">티켓 이미지로 저장</button>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
        <button variant="contained" className="Kakao" id="kakao-link-btn">
          리포트 카카오톡 공유하기
        </button>
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
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

const FinBtnsWrapper = styled.div`
  margin: 20px;
  #img-save-btn {
    background-color: var(--primaryLight);
    border: 0;
    padding: 10px;
    border-radius: 10px;
    &:hover{
      background-color: var(--primaryMain);
    }
  }
  #kakao-link-btn{
    background-color: var(--primaryLight);
    border: 0;
    padding: 10px;
    border-radius: 10px;
    &:hover{
      background-color: var(--primaryMain);
    }
  }
  @media (max-width: 650px) {
    margin: 2px;
    #kakao-link-btn{
    }
  }
`;

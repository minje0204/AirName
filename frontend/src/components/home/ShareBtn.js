import { useEffect } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

// 홈으로 돌아가기, 카카오톡 버튼 컴포넌트
function ShareBtn({ username, birth }) {
  // 카카오톡 공유 함수
  const kakaoShare = () => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',

      content: {
        title: `Hi! What's your name?`,
        description: `🔽알잘딱깔센 영어이름 찾으러 AIR Name 바로가기🧚‍♀️🔽`,
        imageUrl: `https://ifh.cc/g/PBX9v2.png`,
        link: {
          mobileWebUrl: `https://airname.shop`,
          webUrl: `https://airname.shop`
        }
      }
    });
  };

  // 실행시에 share btn 붙이기
  useEffect(() => {
    kakaoShare(username);
  }, [username]);

  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <IconButton className="Kakao" id="kakao-link-btn">
          <img
            src="/kakao_logo.png"
            alt="카카오 로고"
            style={{
              width: '20px',
              height: '20px',
              marginRight: '5px',
              position: 'relative',
              top: '1px'
            }}
          />
          공유하기
        </IconButton>
      </FinBtnsWrapper>
    </StyledWrapper>
  );
}

export default ShareBtn;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

const FinBtnsWrapper = styled.div`
  #img-save-btn {
    background-color: var(--primaryLight);
    border: 0;
    padding: 10px;
    border-radius: 10px;
    height: 45px;
    color: black;
    &:hover {
      background-color: var(--primaryMain);
      cursor: pointer;
    }
  }
  #kakao-link-btn {
    background-color: rgba(255, 235, 0, 100);
    border: 0;
    padding: 10px;
    border-radius: 10px;
    color: rgba(60, 30, 30, 100);
    font-size: 13px;
    height: 45px;
  }
  @media (max-width: 650px) {
    margin: 2px;
    #kakao-link-btn {
    }
  }
`;

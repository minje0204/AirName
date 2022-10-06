import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Box } from '@mui/material';

// 홈으로 돌아가기, 카카오톡 버튼 컴포넌트
function ShareBtn({ username, birth, content, to, h, w, fs, ...props }) {
  // 카카오톡 공유 함수
  const kakaoShare = () => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',

      content: {
        title: `Hi! What's your name?`,
        description: `🔽알잘딱깔센 영어이름 찾으러 AIR Name 바로가기🧚‍♀️🔽`,
        imageUrl: `https://i.imgur.com/izAKrmQ.png`,
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
  }, []);

  return (
    <StyledWrapper>
      <Box sx={{ marginBottom: 0.5 }}>친구랑 같이 하기🖐</Box>
      <Button
        id="kakao-link-btn"
        variant="contained"
        sx={{
          bgcolor: '#ffff3d',
          height: `${h ? h : '44px'}`,
          width: `${w}`,
          marginLeft: '0px'
        }}
        component={Link}
        to={to}
        {...props}
      >
        <img
          src="/kakao.png"
          style={{
            width: '20px',
            height: '20px',
            marginRight: '5px',
            position: 'relative',
            top: '1px'
          }}
        ></img>
        <span id="linkBtnContent" style={{ fontSize: `${fs ? fs : '14px'}` }}>
          {content}
        </span>
      </Button>
    </StyledWrapper>
  );
}

export default ShareBtn;
const StyledWrapper = styled.div`
  border-radius: 20px;
  #linkBtnContent {
    font-family: 'SCDream5';
    color: black;
  }
  #kakao-link-btn {
    font-family: 'SCDream7';
    &:hover {
      background-color: #abab52;
      cursor: pointer;
    }
  }
`;

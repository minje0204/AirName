import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

function FinBtns({ username }) {
  // 카카오톡 공유 함수
  const kakaoShare = (username) => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: `Hi! My name is ${username}😎`,
        description: `${username}의 🔽리포트 보러가기🔽`,
        imageUrl: `https://ifh.cc/g/PBX9v2.png`,
        link: {
          mobileWebUrl: `https://airname.shop/finreport/${username}`,
          webUrl: `https://airname.shop/finreport/${username}`
        }
      }
    });
  };

  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <Link to={'/'}>
          <button id="img-save-btn">
            🏠홈으로 돌아가기
          </button>
        </Link>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
        <IconButton
          className="Kakao"
          id="kakao-link-btn"
          onClick={() => kakaoShare(username)}
        >
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
  ); //255,235,0
}

export default FinBtns;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
  margin: 0 20px;
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

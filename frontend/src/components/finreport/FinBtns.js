import styled from 'styled-components';
import { Link } from 'react-router-dom';

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


  console.log(username)
  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <Link to={'/'}>
          <button variant="contained" id="img-save-btn">
            홈으로 돌아가기
          </button>
        </Link>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
        <button className="Kakao" id="kakao-link-btn" onClick={()=>kakaoShare(username)}>
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
    &:hover {
      background-color: var(--primaryMain);
      cursor: pointer;
    }
  }
  #kakao-link-btn {
    background-color: var(--primaryLight);
    border: 0;
    padding: 10px;
    border-radius: 10px;
    &:hover {
      background-color: var(--primaryMain);
      cursor: pointer;
    }
  }
  @media (max-width: 650px) {
    margin: 2px;
    #kakao-link-btn {
    }
  }
`;

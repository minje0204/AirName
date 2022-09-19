import styled from 'styled-components';

function FinBtns() {
  const kakaoShare = () => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: 'AIR NAME',
        description: '#영어이름 #알잘딱깔센',
        imageUrl: 'https://ifh.cc/g/PBX9v2.png',
        link: {
          mobileWebUrl: 'https://air-name.vercel.app',
          webUrl: 'https://air-name.vercel.app'
        }
      }
    });
  };
  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <button variant="contained" id="img-save-btn">
          티켓 이미지로 저장
        </button>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
        <button
          variant="contained"
          className="Kakao"
          id="kakao-link-btn"
          onClick={kakaoShare}
        >
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

import { useEffect } from 'react';
import styled from 'styled-components';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import IconButton from '@mui/material/IconButton';
import LinkButton from 'components/LinkButton';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import LinkIcon from '@mui/icons-material/Link';
import { toast } from 'react-toastify';

// 홈으로 돌아가기, 카카오톡 버튼 컴포넌트
function FinBtns({ username, birth }) {
  // 카카오톡 공유 함수
  const kakaoShare = (username) => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',

      content: {
        title: `Hi! My name is ${username}😎`,
        description: `${username}의 🔽리포트 보러가기🔽`,
        imageUrl: `https://i.imgur.com/izAKrmQ.png`,
        link: {
          mobileWebUrl: `https://airname.shop/finreport/${username}/${birth}`,
          webUrl: `https://airname.shop/finreport/${username}/${birth}`
        }
      }
    });
  };
  const copyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('복사 성공!', { position: 'top-center' });
    } catch (error) {
      toast.error('복사 실패!', { position: 'top-center' });
    }
  };

  // 실행시에 share btn 붙이기
  useEffect(() => {
    kakaoShare(username);
  }, [username]);

  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector('.card')).then((blob) => {
      saveAs(blob, 'card.png');
    });
  };

  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <LinkButton content="티켓저장" to="" onClick={onDownloadBtn}>
          <SaveAltIcon id="save-icon" sx={{ color: '#fff' }} />
        </LinkButton>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
        <LinkButton content="다시하기" to="/"></LinkButton>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
        <LinkButton
          content="링크 복사"
          to=""
          onClick={() =>
            copyClipBoard(`https://airname.shop/finreport/${username}/${birth}`)
          }
        >
          <LinkIcon id="save-icon" sx={{ color: '#fff' }} />
        </LinkButton>
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
  );
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
  #save-icon {
    margin-right: 5px;
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

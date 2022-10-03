import { useNavigate } from 'react-router-dom';
import errorPlane from '../asset/img/404/errorPlane.png';
import { Button } from '@mui/material';
import styled from 'styled-components';

function Error404() {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <div id="error">
        <div id="title">404</div>
        <div>찾으시는 페이지가 존재하지 않습니다.</div>
        <img src={errorPlane} alt="404 Error" id="errorPlane" />
        <div>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="contained"
            color="secondary"
          >
            <span style={{ color: 'white' }}>이전 페이지로 이동하기</span>
          </Button>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Error404;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  #errorPlane {
    aspect-ratio: 1/1;
    width: min(50vmin, 300px);
  }
  #title {
    font-family: 'SCDream7';
    font-size: 48px;
  }
  #error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

import { Container, Box, Button } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import LabelingResult from './LoadingResult';

export default function Labeling() {
  const name = 'Jane';
  const personalityZero = '세심한';
  const personalityOne = '강인한';
  const [result, setResult] = useState('');

  return (
    <StyledWrapper>
      <Container className="explain">
        <Box className="explain">
          <Box id="title">이미지게임</Box>
          <Box className="question">
            다른 사람은 이 이름에 대해 어떻게 생각할까요?
          </Box>
          <Box className="question">아래 카드를 누르면 결과가 나와요.</Box>
        </Box>
        <Box id="name" sx={{ margin: '10px' }}>
          {name}
        </Box>
        <Box>
          {result ? (
            <LabelingResult
              result={result}
              personalityZero={personalityZero}
              personalityOne={personalityOne}
            />
          ) : (
            <Box id="choices">
              <Button
                variant="outlined"
                className="choice"
                color="primary"
                onClick={() => {
                  setResult(personalityZero);
                }}
              >
                {personalityZero}
              </Button>
              <Button
                variant="outlined"
                className="choice"
                color="warning"
                onClick={() => {
                  setResult(personalityOne);
                }}
              >
                {personalityOne}
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @media (max-width: 410px) {
    font-size: 3vw;
    #choices {
      flex-direction: column;
    }
  }
  .explain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #title {
    font-family: SCDream7;
    font-size: 36px;
  }
  #name {
    background-color: var(--infoMain);
    padding: 20px 40px;
    font-family: SCDream7;
    font-size: clamp(1rem, 4vw, 2rem);
    display: flex;
    justify-content: center;
  }
  #choices {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  .choice {
    radius: 10px;
    padding: 15px 30px;
    background-color: var(--infoMain);
    font-family: SCDream7;
    font-size: clamp(1rem, 4vw, 2rem);
    margin: 10px;
  }
`;

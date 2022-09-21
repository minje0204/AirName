import React from 'react';
import { Container, Box } from '@mui/material';
import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

export default function LabelingResult({
  personalityZero,
  personalityOne,
  result
}) {
  const percent = 60;
  return (
    <StyledWrapper>
      <Container id="resultBox">
        <Box>'{result}'을 선택했어요</Box>
        <Container id="ans">
          <Box sx={{ color: 'primary.main' }} className="cho">
            <Box>{personalityZero}</Box>
            <Box>{percent}%</Box>
          </Box>
          <LinearProgress id="bar" variant="determinate" value={percent} />
          <Box sx={{ color: 'warning.main' }} className="cho">
            <Box>{personalityOne}</Box>
            <Box>{100 - percent}%</Box>
          </Box>
        </Container>
      </Container>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #resultBox {
    background-color: #f9f7f4;
    padding: 20px 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #ans {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
  }
  #bar {
    width: 80%;
  }
  .cho {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

import React from 'react';
import { Container, Box } from '@mui/material';
import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

function LabelingResult({
  resultIdx,
  personalityZero,
  personalityOne,
  attributePercentage
}) {
  console.log(attributePercentage, resultIdx);
  return (
    <StyledWrapper>
      <Container id="ans">
        <Box sx={{ color: 'primary.main' }} className="cho">
          <Box>{personalityZero}</Box>
          <Box>
            {attributePercentage[0] === 0 &&
            attributePercentage[1] === 0 &&
            resultIdx === 0
              ? '100'
              : attributePercentage[0]}
            %
          </Box>
        </Box>
        <LinearProgress
          id="bar"
          variant="determinate"
          value={
            attributePercentage[0] === 0 &&
            attributePercentage[1] === 0 &&
            resultIdx === 0
              ? 100
              : attributePercentage[0]
          }
        />
        <Box sx={{ color: 'warning.main' }} className="cho">
          <Box>{personalityOne}</Box>
          <Box>
            {attributePercentage[0] === 0 &&
            attributePercentage[1] === 0 &&
            resultIdx === 1
              ? '100'
              : attributePercentage[1]}
            %
          </Box>
        </Box>
      </Container>
    </StyledWrapper>
  );
}

export default LabelingResult;

const StyledWrapper = styled.div`
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
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

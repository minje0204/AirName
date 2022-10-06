import React from 'react';
import { Container, Box } from '@mui/material';
import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

function LabelingResult({
  result,
  personalityZero,
  personalityOne,
  attributePercentage
}) {
  return (
    <StyledWrapper>
      <Container id="ans">
        <Box sx={{ color: 'var(--primaryMain)' }} className="cho">
          <Box>{personalityZero}</Box>
          <Box>{attributePercentage[0]}%</Box>
        </Box>
        <LinearProgress
          id="bar"
          variant="determinate"
          value={attributePercentage[0]}
        />
        <Box sx={{ color: 'var(--secondaryMain)' }} className="cho">
          <Box>{personalityOne}</Box>
          <Box>{attributePercentage[1]}%</Box>
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
  #bar > * {
    background-color: var(--primaryMain);
  }
  #bar {
    background-color: var(--secondaryMain);
  }
  .cho {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

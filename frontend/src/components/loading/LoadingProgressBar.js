import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';
import LoadBtn from './LoadingCompleteBtn';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isFull, setIsFull] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setIsFull(1);
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Box id="wait" sx={{ margin: '10px' }}>
        <LinearProgress variant="determinate" value={progress} />
        <StyledWrapper>
          {isFull === 1 ? (
            <LoadBtn btnVisiblity="visible" />
          ) : (
            <LoadBtn btnVisiblity="hidden" />
          )}
        </StyledWrapper>
      </Box>
    </div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

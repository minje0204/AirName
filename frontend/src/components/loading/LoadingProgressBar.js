import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';
import LoadBtn from './LoadingCompleteBtn';
import { IsFillContext } from 'hooks/useIsFillContext';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const { isFill } = useContext(IsFillContext);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (
          localStorage.getItem('rcmndNames') ||
          localStorage.getItem('username')
        ) {
          setProgress(100);
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Box id="wait" sx={{ margin: '10px' }}>
        <LinearProgress variant="determinate" value={progress} />
        <StyledWrapper>
          {isFill ? <LoadBtn wait={false} /> : <LoadBtn wait={true} />}
        </StyledWrapper>
      </Box>
    </div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

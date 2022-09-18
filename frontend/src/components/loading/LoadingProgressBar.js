import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
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
    <Box>
      {isFull === 1 ? (
        <LoadBtn id="loadBtn" />
      ) : (
        <LinearProgress variant="determinate" value={progress} />
      )}
    </Box>
  );
}

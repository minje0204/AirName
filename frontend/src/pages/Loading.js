import React from 'react';
import styled from 'styled-components';
import LoadingTMI from '../components/loading/LoadingTMI';
import ProgressBar from '../components/loading/LoadingProgressBar';

export default function Loading() {
  return (
    <StyledWrapper>
      <LoadingTMI />
      <ProgressBar />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

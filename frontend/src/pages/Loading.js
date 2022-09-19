import React from 'react';
import styled from 'styled-components';
import LoadingTMI from '../components/loading/LoadingTMI';
import Labeling from '../components/loading/LoadingLabeling';
import ProgressBar from '../components/loading/LoadingProgressBar';

export default function Loading() {
  const rand = Math.round(Math.random());
  return (
    <StyledWrapper>
      {rand ? <LoadingTMI /> : <Labeling />}
      <ProgressBar />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  max-width: 700px;
`;

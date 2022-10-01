import React from 'react';
import styled from 'styled-components';
import LoadingTMI from '../components/loading/LoadingTMI';
import Labeling from '../components/loading/LoadingLabeling';
import ProgressBar from '../components/loading/LoadingProgressBar';
import ReactionTimeTest from '../components/loading/LoadingGame';

export default function Loading() {
  localStorage.removeItem('rcmndNames');
  const rand_idx = Math.floor(Math.random() * 3);
  const loadingContent = [<LoadingTMI />, <Labeling />, <ReactionTimeTest />];
  return (
    <StyledWrapper>
      {loadingContent[rand_idx]}
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

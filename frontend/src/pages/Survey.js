import React from 'react';
import styled from 'styled-components';
import SurveySection from '../components/survey/SurveySection';

function Survey() {
  return (
    <StyledWrapper>
      <SurveySection />
    </StyledWrapper>
  );
}

export default Survey;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

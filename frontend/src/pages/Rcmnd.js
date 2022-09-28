import React from 'react';
import styled from 'styled-components';
import RcmndGuide from '../components/rcmnd/RcmndGuide';
import RcmndCard from '../components/rcmnd/RcmndCard';


function Rcmnd() {
  return (
    <RcmndContainer>
      <RcmndGuideContainer>
        <RcmndGuide />
      </RcmndGuideContainer>
      <RcmndCardContainer>
        <RcmndCard />
      </RcmndCardContainer>
    </RcmndContainer>
  );
}

export default Rcmnd;

const RcmndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1300px;

  @media (max-width: 650px) {
    width: 700px;

  }
`;
const RcmndGuideContainer = styled.div``;

const RcmndCardContainer = styled.div``;

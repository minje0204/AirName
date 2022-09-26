import React from 'react';
import styled from 'styled-components';
import RcmndGuide from '../components/rcmnd/RcmndGuide';
import RcmndCard from '../components/rcmnd/RcmndCard';


function Rcmnd() {
  return (
    <RcmndContainer>
      <RcmndHead>
        <RcmndGuide />
      </RcmndHead>
      <RcmndBody>
        <RcmndCard />
      </RcmndBody>
    </RcmndContainer>
  );
}

export default Rcmnd;

const RcmndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;
const RcmndHead = styled.div``;

const RcmndBody = styled.div``;

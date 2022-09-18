import React from 'react';
import styled from 'styled-components';
import RcmndGuide from '../components/rcmnd/RcmndGuide';
import RcmndCard from '../components/rcmnd/RcmndCard';

function Rcmnd() {
  const names = ['Tommy', 'Lisa', 'Sally', 'Jimmy'];
  return (
    <RcmndContainer>
      <RcmndHead>
        <RcmndGuide names={names} />
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
  min-height: 830px;
`
const RcmndHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const RcmndBody = styled.div`

`;

import React from 'react';
import styled from 'styled-components';
import RcmndGuide from '../components/rcmnd/RcmndGuide';
import RcmndCard from '../components/rcmnd/RcmndCard';

function Rcmnd() {
  const names = ['Tommy', 'Lisa', 'Sally', 'Jimmy'];
  return (
    <div>
      <RcmndGuide names={names} />
      <RcmndBody>
        <RcmndCard />
      </RcmndBody>
    </div>
  );
}

export default Rcmnd;

const RcmndBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

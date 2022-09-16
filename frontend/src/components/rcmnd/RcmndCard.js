import React from 'react';
import styled from 'styled-components';
import RcmndCardItems from './RcmndCardItems';

function RcmndCard() {
  const names = ['Jimmy', 'Tommy', 'Lisa', 'Sally'];
  return (
    <RcmdnCardContainer>
      {names.map((name) => (
        <RcmndCardItems key={name} name={name} />
      ))}
    </RcmdnCardContainer>
  );
}

export default RcmndCard;

const RcmdnCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1300px;
`;

import React from 'react';
import styled from 'styled-components';
import RcmndCardItems from './RcmndCardItems';

function RcmndCard() {
  const names = ['Mo', 'Tommy', 'Lisa', 'Philadelphia'];
  return (
    <>
      <RcmdnCardContainer>
        {names.map((name) => (
          <RcmndCardItems key={name} name={name} />
        ))}
      </RcmdnCardContainer>
    </>
  );
}

export default RcmndCard;

const RcmdnCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

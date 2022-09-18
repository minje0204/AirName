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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
`;

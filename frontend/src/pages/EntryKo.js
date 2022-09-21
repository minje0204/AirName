import React from 'react';
import styled from 'styled-components';
import EntryCardKo from '../components/entry/EntryCardKo';

function EntryKo() {
  return (
    <StyledWrapper>
      <div>
        <EntryCardKo />
      </div>
    </StyledWrapper>
  );
}

export default EntryKo;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 650px) {
    width:  95vw;
  }
`;

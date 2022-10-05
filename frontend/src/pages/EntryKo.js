import React from 'react';
import styled from 'styled-components';
import EntryCardKo from '../components/entry/EntryCardKo';

function EntryKo() {
  localStorage.removeItem('rcmndNames');
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
    width: 90vw;
  }
  @media (min-width: 650px) {
    width: 550px;
  }
`;

import React from 'react';
import styled from 'styled-components';
import EntryCardEn from '../components/entry/EntryCardEn';

function EntryEn() {
  localStorage.removeItem('rcmndNames');
  return (
    <StyledWrapper>
      <div>
        <EntryCardEn />
      </div>
    </StyledWrapper>
  );
}

export default EntryEn;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 650px) {
    width: 95vw;
  }
`;

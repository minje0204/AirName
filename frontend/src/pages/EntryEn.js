import React from 'react';
import styled from 'styled-components';
import EntryCardEn from '../components/entry/EntryCardEn';

function EntryEn() {
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
  width: 80vw;
  max-width: 700px;
`;

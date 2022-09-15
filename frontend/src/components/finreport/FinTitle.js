import React from 'react';
import TTSBtn from './TTSBtn';
import styled from 'styled-components';

function FinTitle(props) {
  const hometown = 'California';
  const username = 'Tommy';
  return (
    <StyledWrapper>
      <div id="fintitle-container">
        <h1>Welcome to {hometown},</h1>
        <StyledWrapper><h1>{username}!<TTSBtn /></h1></StyledWrapper>
      </div>
    </StyledWrapper>
  );
}

export default FinTitle;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: black;
`;


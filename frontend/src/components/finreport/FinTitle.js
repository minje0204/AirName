import React from 'react';
import TTSBtn from './TTSBtn';
import styled from 'styled-components';

function FinTitle(props) {
  return (
    <StyledWrapper>
      <div id="fintitle-container">
        <WelcomeWrapper>Welcome to<HomeTownWrapper>{props.hometown}</HomeTownWrapper>,</WelcomeWrapper>
        <NameWrapper>{props.username}!
          <TTSBtn username = {props.username} hometown = {props.hometown} />
        </NameWrapper>
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

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 90px;
  font-weight: bold;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 40px;
`;

const HomeTownWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 40px;
  margin-left: 10px;
`;



import styled from 'styled-components';
import TTSBtn from './TTSBtn';
import {isDesktop} from 'react-device-detect';

function FinTitle({ hometown, username }) {
  return (
    <StyledWrapper>
      <div id="fintitle-container">
        <WelcomeWrapper>
          HELLO,
          {/* <HomeTownWrapper>{hometown}</HomeTownWrapper> */}
        </WelcomeWrapper>
        <NameWrapper>
          {username}!
          { isDesktop ?
            null : <TTSBtn id="fin-tts" username={username} hometown={hometown}/> 
          }
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

const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  font-weight: bold;
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const HomeTownWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

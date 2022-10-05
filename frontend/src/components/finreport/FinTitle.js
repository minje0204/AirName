import styled from 'styled-components';
import TTSBtn from '../TTSBtn';
// import {isDesktop} from 'react-device-detect';

function FinTitle({ hometown, username }) {
  return (
    <StyledWrapper>
      <div id="fintitle-container">

        {/* mainstate가 있으면 렌더링 */}
        {hometown.length > 0 ? (
          <WelcomeWrapper>
            <b>Welcome to{' '}
            {hometown},</b>
          </WelcomeWrapper>
        ) : null}

        <NameWrapper>
          <div id="fin-username">{username}!</div>
          {/* TTS */}
          <div id="fin-tts">
            <TTSBtn
              id="fin-tts"
              username={username}
              hometown={hometown}
              type="fintitle"
            />
          </div>
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
  text-shadow: 0 0 7px  rgba(255,255,255), 0 0 10px rgba(255,255,255), 0 0 21px rgba(255,255,255), 0 0 42px rgba(255,255,255),
  0 0 82px rgba(255,255,255), 0 0 92px rgba(255,255,255), 0 0 102px rgba(255,255,255), 0 0 151px rgba(255,255,255);
 
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
  align-items: center;
  font-size: 80px;
  font-weight: bold;
  #fin-username {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #fin-tts {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const HomeTownWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

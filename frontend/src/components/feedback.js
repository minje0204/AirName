import { useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import elf from '../asset/img/feedback/Elf.png';

function FeedbackBtn() {
  const [sbOn, setSbOn] = useState(false);
  return (
    <StyledWrapper>
      {sbOn ? (
        <div className="speechBubble">
          [📢 클릭시 구글폼으로 이동]
          <br />
          AIR NAME에 대한 의견은
          <br />
          저에게 말씀해주세요!
        </div>
      ) : null}

      <Button
        variant="contained"
        target="_blank"
        id="fbBtn"
        href="https://forms.gle/adf2ZUpUiFUCo8cC9"
        onMouseOver={() => {
          setSbOn(true);
        }}
        onMouseOut={() => {
          setSbOn(false);
        }}
      >
        <img id="elfImg" src={elf} />
      </Button>
    </StyledWrapper>
  );
}

export default FeedbackBtn;

const StyledWrapper = styled.div`
  #elfImg {
    height: 7vmin;
    min-height: 20px;
    max-height: 40px;
    aspect-ratio: 1 / 1;
  }
  #fbBtn {
    aspect-ratio: 1 / 1;
    height: 14vmin;
    min-width: 40px;
    min-height: 40px;
    max-width: 80px;
    max-height: 80px;
    padding: 0;
    position: fixed;
    right: 3vmin;
    bottom: 3vmin;
    background-color: var(--background);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 25%);
    border-radius: 50%;
    border: 2px solid black;
  }
  .speechBubble {
    position: fixed;
    right: clamp(65px, 20vmin, 120px);
    bottom: 3vmin;
    padding: 10px;
    border-radius: 20px;
    background: var(--infoDark);
    border-radius: 0.4em;
    font-size: clamp(0.5rem, 2vw, 1rem);
  }
  .speechBubble:after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    margin-top: -20px;
    border-top: 15px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid var(--infoDark);
  }
`;

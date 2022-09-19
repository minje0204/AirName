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
          AIR Name에 대한 의견은
          <br />
          저에게 말씀해주세요
        </div>
      ) : null}

      <Button
        variant="contained"
        target="_blank"
        id="fbBtn"
        href="https://forms.gle/YWC4eXbDrLLCAgTv9"
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
    width: 7vmin;
    height: 7vmin;
  }
  #fbBtn {
    background-color: var(--background);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 25%);
    border-radius: 50%;
    border: 2px solid black;
    width: 12vmin;
    height: 12vmin;
    position: fixed;
    right: 3vmin;
    bottom: 3vmin;
  }
  .speechBubble {
    position: fixed;
    right: 18vmin;
    bottom: 3vmin;
    padding: 15px;
    border-radius: 20px;
    background: var(--infoDark);
    border-radius: 0.4em;
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

import React from 'react';
import styled from 'styled-components';
import SpeakerImg from '../../asset/img/finreport/Speaker.svg';

function TTSBtn(props) {
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();
  // 언어, 속도 설정
  msg.lang = 'en-US';
  msg.rate = 0.8;

  function stopSpeak() {
    synth.cancel();
  }

  function startSpeak() {
    // 이전에 말하고 있는 단어 취소
    stopSpeak();
    // 이름 변수 넣기
    msg.text = `Welcome to ${props.hometown} ${props.username}`;
    synth.speak(msg);
  }

  return (
    <Button id="TTSbtn" onClick={startSpeak}>
      <SpeakerImgTag src={SpeakerImg} alt="TTSspeaker" />
    </Button>
  );
}

export default TTSBtn;

const Button = styled.button`
  display: inline;
  background-color: transparent;
  border: none;
  :not(:disabled) {
    cursor: pointer;
  }
`;

const SpeakerImgTag = styled.img`
  width: 50px;
  padding-top: 25px;
`;

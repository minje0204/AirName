import React from 'react';
import styled from 'styled-components';
import SpeakerImg from '../../asset/img/finreport/Speaker.svg';

function TTSBtn(props) {
  const synth = window.speechSynthesis;
  // 새 객체 생성
  const msg = new SpeechSynthesisUtterance();

  function stopSpeak() {
    synth.cancel();
  }

  function startSpeak() {
    // 이전에 말하고 있는 단어 취소
    stopSpeak();
    // msg 언어, 속도, text 설정
    msg.text = `Welcome to ${props.hometown} ${props.username}`;
    msg.lang = 'en-US';
    msg.rate = 0.9;
    // voice 속성 설정
    msg.voice = voicesList.find((voice) => voice.lang === 'en-US')
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
  @media (max-width: 650px) {
    padding-top: 5px;
    width: 20px;
  }
`;

import React from 'react';
import styled from 'styled-components';
import SpeakerImg from '../asset/img/finreport/Speaker.svg';

function TTSBtn({ hometown, username, type }) {
  const synth = window.speechSynthesis;
  // 새 객체 생성
  const msg = new SpeechSynthesisUtterance();
  const voicesList = window.speechSynthesis.getVoices();

  function stopSpeak() {
    synth.cancel();
  }

  function startSpeak(e) {
    // 이전 이벤트 취소
    e.stopPropagation();
    // 이전에 말하고 있는 단어 취소
    stopSpeak();
    // msg 언어, 속도, text 설정
    if (type === 'fintitle'){
      msg.text = `Welcome to ${hometown} ${username}`;
    }
    else {
      msg.text = `${username}`;
    }
     
    msg.lang = 'en-US';
    msg.rate = 0.8;
    // voice 속성 설정
    msg.voice = voicesList.find((voice) => voice.lang === 'en-US');
    synth.speak(msg);
  }

  return (
    <Button id="TTSbtn"  onClick={(e) => {
      startSpeak(e);
    }}>
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
  width: 100%;
  height: 100%;
`;

const SpeakerImgTag = styled.img`
  height: 100%;
`;

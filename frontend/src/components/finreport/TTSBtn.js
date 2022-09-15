import React from 'react'
import SpeakerImg from '../../asset/img/finreport/Speaker.svg'
import styled from 'styled-components';

function TTSBtn() {
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();
  // 언어, 속도 설정
  msg.lang = 'en-US'
  msg.rate = 0.6

  function startSpeak() {
      // 이전에 말하고 있는 단어 취소
      stopSpeak();
      // 이름 변수 넣기 
      msg.text = "orange"
      synth.speak(msg);
  }

  function stopSpeak() {
      synth.cancel();
  }

  return (
    <Button id="TTSbtn" onClick={startSpeak}>
      <img src={SpeakerImg} alt='TTSspeaker'/>
    </Button>
  )
}

export default TTSBtn

const Button = styled.button`
  display: inline;
  background-color: transparent;
  border: none;
  :not(:disabled) {
    cursor: pointer;
  }
`
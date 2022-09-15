import React from 'react';

function TTSBtn() {
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();
  // 언어, 속도 설정
  msg.lang = 'en-US';
  msg.rate = 0.6;

  function stopSpeak() {
    synth.cancel();
  }

  function startSpeak() {
    // 이전에 말하고 있는 단어 취소
    stopSpeak();
    // 이름 변수 넣기
    msg.text = 'orange';
    synth.speak(msg);
  }

  return (
    <div>
      <button type="button" onClick={startSpeak}>
        재생
      </button>
    </div>
  );
}

export default TTSBtn;

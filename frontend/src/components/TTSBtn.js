import React, { useRef } from 'react';
import styled from 'styled-components';
import SpeakerImg from '../asset/img/finreport/Speaker.svg';

function TTSBtn({ hometown, username, type }) {
  const ttsSrc =
    'https://airname.s3.ap-northeast-2.amazonaws.com/sound/' +
    JSON.stringify(username).replaceAll('"', '') +
    '.mp3';

  const audioPlayer = useRef();

  const play = (e) => {
    e.stopPropagation();
    audioPlayer.current.play();
  };

  return (
    <>
      <audio src={ttsSrc} ref={audioPlayer}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <div>
        <Button
          onClick={(e) => {
            play(e);
          }}
        >
          <SpeakerImgTag src={SpeakerImg} alt="TTSspeaker" />
        </Button>
      </div>
    </>
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

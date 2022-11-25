import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import SpeakerImg from '../asset/img/finreport/Speaker.svg';
import API from '../config';

function TTSBtn({ hometown, username, type, iconSize }) {
  const [audioSource, setAudioSource] = useState('');

  const requestAudioFile = async () => {
    let requireMsg = username;

    if (type === 'fintitle' && hometown.length > 0) {
      console.log('fin: ' + requireMsg);
      requireMsg = `Welcome to ${hometown}, ${username}`;
    } else {
      requireMsg = username;
    }

    const response = await axios.get(`${API.SPEAKING}/${requireMsg}`, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'audio/mp3'
      }
    });
    const audioContext = getAudioContext();

    // makeAudio(response)
    const audioBuffer = await audioContext.decodeAudioData(response.data);
    // console.log(audioBuffer)

    //create audio source
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
    // console.log("source : ", source);
    setAudioSource(source);
  };

  const getAudioContext = () => {
    AudioContext = window.AudioContext; /* || window.webkitAudioContext */
    const audioContent = new AudioContext();
    return audioContent;
  };

  const audioPlayer = useRef();

  return (
    <>
      <audio ref={audioPlayer}>
        <source type="audio/mp3" />
        <code>audio</code> element.
      </audio>
      <div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            requestAudioFile();
          }}
        >
          <img
            src={SpeakerImg}
            alt="TTSspeaker"
            style={{
              width: `${iconSize ? iconSize : '100%'}`
            }}
          />
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

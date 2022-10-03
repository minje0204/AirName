import axios from "axios";
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import SpeakerImg from '../asset/img/finreport/Speaker.svg';
import API from '../config';

function TTSBtn({ hometown, username, type }) {
	const [audioSource, setAudioSource] = useState('');
	
	const requestAudioFile = async () => {

		const requireMsg = username;

		if (type === 'fintitle' && hometown.length > 0) {
			requireMsg = "Welcome to " + hometown + username;
		}

		console.log(requireMsg);

		const response = await axios.get(`${API.SPEAKING}/${requireMsg}`,{
			responseType: 'arraybuffer',
			headers: {
				'Content-Type': 'audio/mp3'
			}
		})
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
	}		

	const getAudioContext = () => {
		AudioContext = window.AudioContext; /* || window.webkitAudioContext */
		const audioContent = new AudioContext();
		return audioContent;
	}

  const audioPlayer = useRef();

  return (
		<>
      <audio ref={audioPlayer}>
				<source type="audio/mp3"/>
        <code>audio</code> element.
      </audio>
      <div>
        <Button
          onClick={(e) => {
						requestAudioFile();
          }}
        >
          <SpeakerImgTag src={SpeakerImg} alt="TTSspeaker" />
        </Button>
      </div>
    </>
  );
}

//tts file 직접 사용
// function TTSBtn({ hometown, username, type }) {
//   const ttsSrc =
//     'https://airname.s3.ap-northeast-2.amazonaws.com/sound/' +
//     JSON.stringify(username).replaceAll('"', '') +
// 		'.mp3';

//   const audioPlayer = useRef();

// 	const play = (e) => {
//     e.stopPropagation();
//     audioPlayer.current.play();
//   };

//   return (
// 		<>
//       <audio ref={audioPlayer}>
// 				<source type="audio/mp3" src={ttsSrc} />
//         <code>audio</code> element.
//       </audio>
//       <div>
//         <Button
//           onClick={(e) => {
// 						play(e);
// 						// requestAudioFile();
//           }}
//         >
//           <SpeakerImgTag src={SpeakerImg} alt="TTSspeaker" />
//         </Button>
//       </div>
//     </>
//   );
// }

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

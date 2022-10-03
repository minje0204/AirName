import axios from "axios";
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import SpeakerImg from '../asset/img/finreport/Speaker.svg';

function TTSBtn({ hometown, username, type }) {
  // const ttsSrc =
  //   'https://airname.s3.ap-northeast-2.amazonaws.com/sound/' +
  //   JSON.stringify(username).replaceAll('"', '') +
	// 	'.mp3';

	const [audioSource, setAudioSource] = useState('');

	useEffect(() => {
		requestAudioFile();
	}, [])
	
	const requestAudioFile = async () => {
		console.log("request Audio");
		const response = await axios.get('http://127.0.0.1:8000/speaking/sean',{
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

	const play = (e) => {
    e.stopPropagation();
    audioPlayer.current.play();
  };

  return (
		<>
      <audio ref={audioPlayer}>
				<source type="audio/mp3"/>
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

// function TTSBtn({ hometown, username, type }) {
	
//   const ttsSrc =
//     'https://airname.s3.ap-northeast-2.amazonaws.com/sound/' +
//     JSON.stringify(username).replaceAll('"', '') +
// 		'.mp3';
	
// 	const audio = new Audio(ttsSrc);
// 	console.log(typeof(audio))

// 	const ttsSrc2 =
//     'https://airname.s3.ap-northeast-2.amazonaws.com/state/' +
//     'Washington DC'.replaceAll('"', '') +
// 		'.mp3';
	
// 	const audio2 = new Audio(ttsSrc2);
// 	console.log(audio2)

//   const audioPlayer = useRef();

//   const play = (e) => {
//     e.stopPropagation();
//     audioPlayer.current.play();
//   };

//   return (
// 		<>
//       <audio ref={audioPlayer}>
// 				<source type = "audio/mp3" src={ttsSrc}/>
//         <code>audio</code> element.
//       </audio>
//       <div>
//         <Button
//           onClick={(e) => {
// 						play(e);
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

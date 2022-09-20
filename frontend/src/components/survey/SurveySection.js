import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Fairly from '../../asset/img/survey/Fairy.svg';
import './Survey.css';
import question from './Question';
import answer from './Answer';
import answerKey from './AnswerKey';
import API from '../../config';

function SurveySection() {
  // 설문 개수 11개
  const N = 12;

  const [cur, setCur] = useState(0);
  const [surveyRes, setSurveyRes] = useState([]);
  const navigate = useNavigate();
  // 마지막인지 검사하는함수
  // True면

  const getName = () => {
    axios.post(`${API.SURVEY}`)
  }

  const IsLast = (num) => {
    if (num === N) {
      console.log('설문 끝!')
      console.log(surveyRes)
      getName()
      navigate('/loading');
    }
  }

  const handleClick0 = () => {
    const newElement = { 
      [answerKey[cur]] : 0
    }
    setSurveyRes(() => [...surveyRes, newElement]);
    setCur(cur + 1);
    console.log(surveyRes);
    IsLast(cur);
  };

  const handleClick1 = () => {
    const newElement = { 
      [answerKey[cur]] : 1
    }
    setSurveyRes(() => [...surveyRes, newElement]);
    setCur(cur + 1);
    console.log(surveyRes);
    IsLast(cur);
  };

  const handleClick2 = () => {
    const newElement = { 
      [answerKey[cur]] : 2
    }
    setSurveyRes(() => [...surveyRes, newElement]);
    setCur(cur + 1);
    console.log(surveyRes);
    IsLast(cur);
  };
  return (
    <SveySectionContainer>
      <SveyHead>
        {/* {answerKey} */}
        <SveyImg>
          <img src={Fairly} />
        </SveyImg>
        <SveyQuestion className="speech-bubble">{question[cur]}</SveyQuestion>
      </SveyHead>
      <SveyBody>
        <SvyBtbn onClick={handleClick0}>{answer[cur][0]}</SvyBtbn>
        <SvyBtbn onClick={handleClick1}>{answer[cur][1]}</SvyBtbn>
        <SvyBtbn onClick={handleClick2}>{answer[cur][2]}</SvyBtbn>
      </SveyBody>
    </SveySectionContainer>
  );
}

export default SurveySection;

const SveySectionContainer = styled.div`
  display: flex;
  jstify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  max-width: 750px;
`;
const SveyHead = styled.div`
  display: flex;
  jstify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  max-height: 150px;
`;
const SveyImg = styled.div`
  height: 80%;
  width: 20%;
  padding-left: 30px;
  z-index: 1;
  // &:hover {
  //   animation: shake 10s;
  // }
  // @keyframes shake {
  //   0% {
  //     transform: translate(1px, 1px) rotate(0deg);
  //   }
  //   30% {
  //     transform: translate(40px, 2px) rotate(0deg);
  //   }
  //   60% {
  //     transform: translate(-1px, -1px) rotate(1deg);
  //   }
  //   100% {
  //     transform: translate(1px, -2px) rotate(-1deg);
  //   }
  // }
`;
const SveyQuestion = styled.div`
  height: 80%;
  width: 80%;
  margin-left: 3%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 25px;
`;
const SveyBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9f7f4;
  border-radius: 20px;
  width: 100%;
  max-height: 400px;
  margin-top: 20px;
  &:hover {
    background-color: #f0ede9;
  }
`;
const SvyBtbn = styled.button`
  margin: 10px 20px;
  width: 80vw;
  max-width: 700px;
  height: 20vw;
  max-height: 100px;
  border-radius: 20px;
  border: 0;
  background-color: #ff9800;
  color: white;
  font-size: 24px;
  &:hover {
    background-color: #ed6c02;
    cursor: pointer;
  }
`;

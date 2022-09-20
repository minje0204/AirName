import { useEffect, useState } from 'react';
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
  const [cur, setCur] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [surveyRes, setSurveyRes] = useState({});
  const navigate = useNavigate();

  const getName = () => {
    axios.post(`${API.SURVEY}`, surveyRes).then((res) => {
      // 중복 데이터 검사
      console.log(res)
    });
  };

  const handleClick = (input) => {
    const newElement = {
      [answerKey[cur]]: input
    };
    console.log({ newElement });
    setSurveyRes({ ...surveyRes, ...newElement });
    if (cur < 11) setCur(cur + 1);
  };

  useEffect(() => {
    if (Object.entries(surveyRes).length === 12) setIsLast(true);
  }, [surveyRes]);

  useEffect(() => {
    if (isLast) {
      getName();
      navigate('/loading');
    }
  }, [isLast]);

  return (
    <SveySectionContainer>
      <SveyHead>
        <SveyImg>
          <img src={Fairly} />
        </SveyImg>
        <SveyQuestion className="speech-bubble">{question[cur]}</SveyQuestion>
      </SveyHead>
      <SveyBody>
        <SvyBtbn onClick={() => handleClick(0)}>{answer[cur][0]}</SvyBtbn>
        <SvyBtbn onClick={() => handleClick(1)}>{answer[cur][1]}</SvyBtbn>
        <SvyBtbn onClick={() => handleClick(2)}>{answer[cur][2]}</SvyBtbn>
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
  max-width: 750px; ;
`;

const SveyHead = styled.div`
  display: flex;
  jstify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  max-height: 150px; ;
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
  // };
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

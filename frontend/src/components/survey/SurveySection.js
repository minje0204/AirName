import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Fairly from '../../asset/img/survey/Fairy.svg';
import './Survey.css';

function SurveySection() {
  const Question = ['당신은 어떤 성별의 이름을 받고 싶으신가요?', '나는 누구'];
  const Answer = [
    ['남성적', '여성적', '중성적'],
    ['A', 'B', 'C']
  ];
  const handleClick = () => {
    console.log('click');
  };
  return (
    <SveySectionContainer>
      <SveyHead>
        <SveyImg>
          <img src={Fairly} />
        </SveyImg>
        <SveyQuestion className="speech-bubble">{Question[0]}</SveyQuestion>
      </SveyHead>
      <SveyBody>
        <Link to="/loading">
          <SvyBtbn onClick={handleClick}>{Answer[0][0]}</SvyBtbn>
          <SvyBtbn>{Answer[0][1]}</SvyBtbn>
          <SvyBtbn>{Answer[0][2]}</SvyBtbn>
        </Link>
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

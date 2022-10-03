import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Fairly from '../../asset/img/survey/Fairy.svg';
import './Survey.css';

//컴포넌트
import LinkButton from 'components/LinkButton';

import questions from './Question';
import API from '../../config';

function SurveySection() {
  const navigate = useNavigate();

  // 설문 계산용
  const [cur, setCur] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [ramdomNums, setRamdomNums] = useState([11, 12]);

  // 최종적으로 보내줄 설문결과
  const [surveyRes, setSurveyRes] = useState({});

  // localStorage에서 가져오는 state
  const [nameKo, setNameKo] = useState('');
  const [birth, setBirth] = useState(0);
  const [gender, setGender] = useState('');

  // Local에서 데이터 가져오기
  const getUserInfo = () => {
    setNameKo(localStorage.getItem('nameKo'));
    setBirth(localStorage.getItem('birth'));
    setGender(localStorage.getItem('gender'));
  };

  // 이름 가져와서 Local에 저장
  const sendSurveyGetName = async (data) => {
    console.log(data)
    axios.post(`${API.GETNAME}`, data).then((res) => {
      console.log(res);
      // 이름 추천 데이터 저장
      localStorage.setItem('rcmndNames', JSON.stringify(res.data));
    });
  };

  // 클릭시, 데이터 묶어서 계속 저장
  const handleClick = (input) => {
    const newElement = {
      [questions[ramdomNums[cur]].answerKey]: input
    };
    setSurveyRes({ ...surveyRes, ...newElement });
    if (cur < 5) setCur(cur + 1);
    if (isLast === true && cur === 5) {getName()}
  };

  // 이전으로 돌아가는 버튼
  const backToPre = () => {
    if (cur > 0) {
      if (Object.entries(surveyRes).length === 6) setIsLast(false);
      const key = questions[ramdomNums[cur-1]].answerKey
      delete surveyRes[key]
      setCur(cur - 1)
    }
  } 

  // 중복없는 랜덤 뽑아내는
  const selectIndex = (totalIndex, selectingNumber) => {
    let randomIndexArray = [];
    for (let i = 0; i < selectingNumber; i++) {
      let randomNum = Math.floor(Math.random() * totalIndex);
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray = [...randomIndexArray, randomNum];
      } else {
        i--;
      }
    }
    return randomIndexArray;
  };

  // 서베이 데이터 보낼 항목이 모두 채워졌을 때, isLast true로 변환
  useEffect(() => {
    if (Object.entries(surveyRes).length === 6) setIsLast(true);
  }, [surveyRes]);
  
  const getName = () => {
    if (isLast) {
      const data = {
        name: nameKo,
        gender: gender,
        birth: birth,
        attr: surveyRes
      };
      console.log(data)
      sendSurveyGetName(data);
      navigate('/loading');
    }
  }

  // 첫 렌더링시 데이터 가져오기
  useEffect(() => {
    getUserInfo();
    setRamdomNums([...ramdomNums, ...selectIndex(10, 4)]);
  }, []);

  return (
    <SveySectionContainer>
      <SveyHead>
        <SveyImg>
          <img id="survey-img" src={Fairly} />
        </SveyImg>
        <SveyQuestion className="speech-bubble">
          {questions[ramdomNums[cur]].question}
        </SveyQuestion>
      </SveyHead>
      <SveyBody>
        <SvyBtbn id="svy-btn" className="shadow" onClick={() => handleClick(0)}>
          {questions[ramdomNums[cur]].answer[0]}
        </SvyBtbn>
        <SvyBtbn id="svy-btn" className="shadow" onClick={() => handleClick(1)}>
          {questions[ramdomNums[cur]].answer[1]}
        </SvyBtbn>
        <SvyBtbn id="svy-btn" className="shadow" onClick={() => handleClick(2)}>
          {questions[ramdomNums[cur]].answer[2]}
        </SvyBtbn>
        <LinkButton to="" content="이전" onClick={() => backToPre()}>이전</LinkButton>
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
  padding-left: 30px;
  z-index: 1;
  @media (max-width: 650px) {
    padding-left: 20px;
    #survey-img {
      width: 50px;
    }
  }
`;
const SveyQuestion = styled.div`
  margin-left: 3%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 25px;
  font-size: 20px;
  @media (max-width: 650px) {
    font-size: 11px;
    padding: 14px;
    border-radius: 15px;
  }
`;

const SveyBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 13px 0px;

  border-radius: 20px;
  width: 100%;
  max-height: 400px;
  margin-top: 20px;
`;

const SvyBtbn = styled.button`
  margin: 10px 20px;
  width: 80vw;
  max-width: 700px;
  height: 20vw;
  max-height: 100px;
  border-radius: 20px;
  border: 5px solid;
  background-color: transparent;
  border-color: rgb(191, 226, 240);
  color: black;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 650px) {
    font-size: 16px;
    border: 3px solid;
    border-color: var(--primaryLight);
  }
`;

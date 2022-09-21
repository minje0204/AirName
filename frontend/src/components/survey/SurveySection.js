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
  const [totalData, setTotalData] = useState([]);
  const [nameKo, setNameKo] = useState('');
  const [birth, setBirth] = useState(0);
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  // Local에서 데이터 가져오기
  const getUserInfo = () => {
    setNameKo(localStorage.getItem('nameKo'));
    setBirth(localStorage.getItem('birth'));
    setGender(localStorage.getItem('gender'));
  }

  // 데이터 합쳐서 TotalData에 저장
  const gatherData = async () => {
    setTotalData([nameKo, gender, birth, surveyRes])
    console.log('gatherdata')
  }

  // 이름 가져와서 Local에 저장
  const getName = () => {
    axios.post(`${API.SURVEY}`, totalData).then((res) => {
      console.log(res);
      // 이름 추천 데이터 저장
      localStorage.setItem('rcmndNames', JSON.stringify(res.data));
    })
  };

  const handleClick = (input) => {
    const newElement = {
      [answerKey[cur]]: input
    };
    setSurveyRes({ ...surveyRes, ...newElement });
    if (cur < 11) setCur(cur + 1);
  };

  useEffect(() => {
    if (Object.entries(surveyRes).length === 12) {
      gatherData().then(() => {
        setIsLast(true)
        console.log('isLasttrue')
      })
    };
  }, [surveyRes]);

  useEffect(() => {
    if (isLast) {
      getName();
      navigate('/loading');
    }
  }, [isLast]);

  useEffect(() => {
    getUserInfo(); 
  }, []);

  return (
    <SveySectionContainer>
      <SveyHead>
        <SveyImg>
          <img id="survey-img" src={Fairly} />
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
  @media (max-width: 650px) {
    font-size: 12px;
  }
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

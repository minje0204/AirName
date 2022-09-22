import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

//컴포넌트
import FinBtns from '../components/finreport/FinBtns';
import FinTitle from '../components/finreport/FinTitle';
import MyCard from '../components/finreport/MyCard';
import ReportContent from '../components/finreport/ReportContent';
import ReportFooter from 'components/finreport/ReportFooter';

import API from '../config';

function FinReport() {
  const { username } = useParams();
  const birth = localStorage.getItem('birth');
  const gender = localStorage.getItem('gender');
  // const [reportData, setReportData] = useState({});
  const [femaleMeaning, setFemaleMeaning] = useState('');
  const [femaleState, setFemaleState] = useState('');
  const [maleMeaning, setMaleMeaning] = useState('');
  const [maleState, setMaleState] = useState('');
  const [mainState, setMainState] = useState('');

  // maleState, femaleState 존재에 따라 mainState 저장
  const calcMainState = () => {
    if (maleState && femaleState) {
      if (gender === 'F') {
        setMainState(femaleState);
      } else {
        setMainState(maleState);
      }
    } else if (femaleState) {
      setMainState(femaleState);
    } else {
      setMainState(maleState);
    }
  };

  const saveData = async (res) => {
    const data = JSON.parse(res.data)
    console.log(data)
      setFemaleMeaning(data.female.meaning);
      setFemaleState(data.female.state);
      setMaleMeaning(data.male.meaning);
      setMaleState(data.male.state);


  }

  // 리포트 데이터 요청하고 저장하는 함수
  const getReportData = async () => {
    await axios
      .get(`${API.FINREPORT}/${username}/${birth}`)
      .then((res) => {
          saveData(res).then(calcMainState())
      });
  };

  // 렌더링 될 때, 리포트 데이터 요청
  useEffect(() => {
    getReportData();
  }, []);

  return (
    <StyledWrapper>
      <FinTitle username={username} hometown={mainState} />
      <FinBtns username={username} />
      <MyCard username={username} hometown={mainState} />
      <ReportContent
        username={username}
        hometown={mainState}
        maleState={maleState}
        femaleState={femaleState}
        maleMeaning={maleMeaning}
        femaleMeaning={femaleMeaning}
      />
      <ReportFooter></ReportFooter>
    </StyledWrapper>
  );
}

export default FinReport;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 300px;
  overflow: scroll;
`;

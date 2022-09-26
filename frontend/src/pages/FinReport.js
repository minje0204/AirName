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
    const data = JSON.parse(res.data);

    setFemaleMeaning(data.female.meaning);
    setFemaleState(data.female.state);
    setMaleMeaning(data.male.meaning);
    setMaleState(data.male.state);
  };

  // 리포트 데이터 요청하고 저장하는 함수
  const getReportData = async () => {
    await axios.get(`${API.FINREPORT}/${username}/${birth}`).then((res) => {
      saveData(res).then(calcMainState());
    });
  };

  // 렌더링 될 때, 리포트 데이터 요청
  useEffect(() => {
    getReportData();
  });

  return (
    <StyledWrapper>
      <div id="content-container">
        <FintitleContainer>
          <FinTitle username={username} hometown={mainState} />
        </FintitleContainer>
        <FinBodyContainer>
          <FinBtns username={username} />
          <MyCardContainer>
            <MyCard username={username} hometown={mainState} />
          </MyCardContainer>
          <ReportContent
            username={username}
            hometown={mainState}
            maleState={maleState}
            femaleState={femaleState}
            maleMeaning={maleMeaning}
            femaleMeaning={femaleMeaning}
          />
        </FinBodyContainer>
      </div>
      <div id="footer-container">
        <ReportFooter />
      </div>
    </StyledWrapper>
  );
}

export default FinReport;

const StyledWrapper = styled.div`
  #content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }
  #footer-container {
    width: 100%;
    background: var(--primaryLight);
    margin-top: 30px;
  }
`;

const FintitleContainer = styled.div`
  min-height: 150px;
  @media (max-width: 650px) {
    min-height: 50px;
  }
`;
const FinBodyContainer = styled.div``;

const MyCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

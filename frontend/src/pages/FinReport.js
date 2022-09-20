import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import FinBtns from '../components/finreport/FinBtns';
import FinTitle from '../components/finreport/FinTitle';
import MyCard from '../components/finreport/MyCard';
import ReportContent from '../components/finreport/ReportContent';
import API from '../config';

function FinReport() {
  const hometown = 'Korea';
  const { username } = useParams();
  const birth = localStorage.getItem('birth');
  const gender = localStorage.getItem('gender');
  // const [reportData, setReportData] = useState({})
  const [femaleMeaning, setFemaleMeaning] = useState('');
  const [femaleState, setFemaleState] = useState('');
  const [maleMeaning, setMaleMeaning] = useState('');
  const [maleState, setMaleState] = useState('');
  const [mainState, setMainState] = useState('');

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

  const getReportData = async () => {
    await axios
      .get(`${API.FINREPORT}/${username}/${gender}/${birth}`)
      .then((res) => {
        setFemaleMeaning(res.data.female.meaning);
        setFemaleState(res.data.female.state);
        setMaleMeaning(res.data.male.meaning);
        setMaleState(res.data.male.state);
        calcMainState();
      });
  };

  useEffect(() => {
    getReportData();
  }, []);

  return (
    <StyledWrapper>
      <FinTitle username={username} hometown={mainState} />
      <FinBtns />
      <MyCard username={username} hometown={mainState} />
      <ReportContent
        username={username}
        hometown={hometown}
        maleState={maleState}
        femaleState={femaleState}
        maleMeaning={maleMeaning}
        femaleMeaning={femaleMeaning}
      />
    </StyledWrapper>
  );
}

export default FinReport;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

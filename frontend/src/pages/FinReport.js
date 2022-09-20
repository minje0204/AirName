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
  const [femaleMeaning, setFemaleMeaning] = useState('')
  const [femaleState, setFemaleState] = useState('')
  const [maleMeaning, setMaleMeaning] = useState('')
  const [maleState, setMaleState] = useState('')
  
  const [mainState, setMainState] = useState('')

  // const calcMainState = {
  //   if (maleState && femaleState) {

  //   }
  // }

  const getReportData = async () => {
  await axios
    .get(`${API.FINREPORT}/${username}/${gender}/${birth}`)
    .then((res) => {
      setFemaleMeaning(res.data.female.meaning);
      setFemaleState(res.data.female.state);
      setMaleMeaning(res.data.male.meaning);
      setMaleState(res.data.male.state);
    });
  };
  useEffect(() => {
    getReportData()
  }, [])
    
  return (
    <StyledWrapper>
      <FinTitle username={username} hometown={hometown} />
      <FinBtns />
      <MyCard username={username} hometown={hometown} />
      <ReportContent username={username} report={hometown} />
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

//컴포넌트
import FinBtns from '../components/finreport/FinBtns';
import FinTitle from '../components/finreport/FinTitle';
import MyCard from '../components/finreport/MyCard';
import ReportContent from '../components/finreport/ReportContent';
// import ReportFooter from 'components/finreport/ReportFooter';

//데이터
import HomeTownEn from '../components/finreport/HomeTownEn';
import HomeTownKo from '../components/finreport/HomeTownKo';
import API from '../config';

function FinReport() {
  const { username } = useParams();
  const birth = localStorage.getItem('birth');
  const gender = localStorage.getItem('gender');
  const [rcmndNames, setRcmndNames] = useState({});
  const [nameInfo, setNameInfo] = useState({});
  const [femaleState, setFemaleState] = useState('');
  const [meaning, setMeaning] = useState('');
  const [maleState, setMaleState] = useState('');
  const [mainState, setMainState] = useState('');
  const [parseEnHome, setParseEnHome] = useState('');
  const [parseKoHome, setParseKoHome] = useState('');
  const [parseFeEnHome, setParseFeEnHome] = useState('');
  const [parseFeKoHome, setParseFeKoHome] = useState('');
  const [parseEnMainState, setParseEnMainState] = useState('');
  const [isNewName, setIsNewName] = useState(false);

  const setEnHomeTown = () => {
    Object.entries(HomeTownEn).map(([k, v]) => {
      if (k === maleState) {
        setParseEnHome(v);
      }
      if (k === femaleState) {
        setParseFeEnHome(v);
      }
    });
  };

  const setKoHomeTown = () => {
    Object.entries(HomeTownKo).map(([k, v]) => {
      if (k === maleState) {
        setParseKoHome(v);
      }
      if (k === femaleState) {
        setParseFeKoHome(v);
      }
    });
  };

  const setEnMainState = () => {
    Object.entries(HomeTownEn).map(([k, v]) => {
      if (k === mainState) {
        setParseEnMainState(v);
      }
    });
  };

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
    setFemaleState(data.female.state);
    setMeaning(data.meaning);
    setMaleState(data.male.state);
  };

  // 리포트 데이터 요청하고 저장하는 함수
  const getReportData = async () => {
    await axios.get(`${API.FINREPORT}/${username}/${birth}`)
    .then((res) => {
      saveData(res).then(calcMainState());
      setIsNewName(false)
    })
    .catch(setIsNewName(true))
  };
  
  useEffect(() => {
    setRcmndNames(JSON.parse(JSON.parse(localStorage.getItem('rcmndNames'))))
    setNameInfo(rcmndNames[username])
  }, [])

  useEffect(() => {
    setNameInfo(rcmndNames[username])
  }, [rcmndNames])

  // 렌더링 될 때, 리포트 데이터 요청
  useEffect(() => {
    getReportData();
    setEnHomeTown();
    setKoHomeTown();
    setEnMainState();
  }, [femaleState, maleState, mainState]);

  return (
    <StyledWrapper>
      <div id="content-container">
        
        <FintitleContainer>
          <FinTitle username={username} hometown={parseEnMainState} />
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
            meaning={meaning}
            parseKoHome={parseKoHome}
            parseEnHome={parseEnHome}
            parseFeKoHome={parseFeKoHome}
            parseFeEnHome={parseFeEnHome}
            isNewName={isNewName}
            nameInfo={nameInfo}
          />
        </FinBodyContainer>
      </div>
      {/* <div id="footer-container">
        <ReportFooter />
      </div> */}
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
    margin-bottom: 50px;
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

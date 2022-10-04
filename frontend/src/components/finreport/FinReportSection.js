import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

//컴포넌트
import FinBtns from '../finreport/FinBtns';
import FinTitle from '../finreport/FinTitle';
import MyCard from '../finreport/MyCard';
import ReportContent from '../finreport/ReportContent';
import ReportFooter from 'components/finreport/ReportFooter';

//데이터
import HomeTownEn from '../finreport/HomeTownEn';
import HomeTownKo from '../finreport/HomeTownKo';
import API from '../../config';

function FinReport() {
  const { username, birth } = useParams();

  // local Storage에서 가져오는 것들
  const [gender, setGender] = useState('');
  const [rcmndNames, setRcmndNames] = useState({});
  const [nameInfo, setNameInfo] = useState({});

  // 요청으로 받아오는 것들
  const [femaleState, setFemaleState] = useState('');
  const [meaning, setMeaning] = useState('');
  const [maleState, setMaleState] = useState('');
  const [femaleYear, setFemaleYear] = useState('');
  const [maleYear, setMaleYear] = useState('');
  const [maleCelebrity, setMaleCelebrity] = useState({});
  const [femaleCelebrity, setFemaleCelebrity] = useState({});
  const [maleCharacter, setMaleCharacter] = useState({});
  const [femaleCharacter, setFemaleCharacter] = useState({});

  // 요청한 이름이 없을 때
  const [isNewName, setIsNewName] = useState(false);

  // 요청 받아서 계산하는 것들
  const [mainState, setMainState] = useState('');
  const [parseEnHome, setParseEnHome] = useState('');
  const [parseKoHome, setParseKoHome] = useState('');
  const [parseFeEnHome, setParseFeEnHome] = useState('');
  const [parseFeKoHome, setParseFeKoHome] = useState('');
  const [parseEnMainState, setParseEnMainState] = useState('');

  // 영어 이름으로 치환
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

  // 한글 이름으로 치환
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

  // Main State 영어로 치환
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
    } else{
      if (femaleState) {
        setMainState(femaleState);
      } 
      if (maleState) {
        setMainState(maleState);
      }
    }
  
  };

  // 받아온 데이터 저장하는 함수
  const saveData = async (res) => {
    console.log(res.data);
    const data = JSON.parse(res.data);
    setFemaleState(data.female.state);
    setMeaning(data.meaning);
    setMaleState(data.male.state);
    setFemaleCelebrity(data.female.celebrity);
    setMaleCelebrity(data.male.celebrity);
    setMaleCharacter(data.male.character);
    setFemaleCharacter(data.female.character);
  };

  const saveYearData = async (res) => {
    const data = JSON.parse(res.data);
    setFemaleYear(data.female);
    setMaleYear(data.male);
  };

  // 리포트 데이터 요청하고 저장하는 함수
  const getReportData = () => {
    axios
      .get(`${API.FINREPORT}/${username}/${birth}`)
      .then((res) => {
        saveData(res)
        setIsNewName(false);
      })
      .catch(setIsNewName(true));
  };

  const getYearReportData = () => {
    axios
      .get(`${API.YEARREPORT}/${username}`)
      .then((res) => {
        saveYearData(res).then();
        // setIsNewName(false);
      })
      .catch
      // setIsNewName(true)
      ();
  };

  // 한번만 실행되는, ComponentDidMount, gender, 추천된 이름 분위기,발음, 생일
  useEffect(() => {
    setRcmndNames(JSON.parse(JSON.parse(localStorage.getItem('rcmndNames'))));
    setGender(localStorage.getItem('gender'));
  }, []);

  // 분위기 발음 데이터 받아오면 저장
  useEffect(() => {
    if (rcmndNames) {
      setNameInfo(rcmndNames[username]);
    }
  }, [rcmndNames]);

  // 한영치환
  useEffect(() => {
    setEnHomeTown();
    setKoHomeTown();
    setEnMainState();
    calcMainState();
  }, [femaleState, maleState, mainState]);

  // birth 들어오면 getRepordata get요청
  useEffect(() => {
    if (birth) {
      getReportData();
      getYearReportData();
    }
  }, [birth]);

  return (
    <StyledWrapper>
      <FinReportContentContainer>
        <FintitleContainer>
          <FinTitle username={username} hometown={parseEnMainState} />
        </FintitleContainer>
        <FinBodyContainer>
          <FinBtns username={username} birth={birth} />
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
            femaleYear={femaleYear}
            maleYear={maleYear}
            mainState={mainState}
            parseEnMainState={parseEnMainState}
            maleCelebrity={maleCelebrity}
            femaleCelebrity={femaleCelebrity}
            maleCharacter={maleCharacter}
            femaleCharacter={femaleCharacter}
          />

          <FooterContainer>
            <ReportFooter />
          </FooterContainer>
        </FinBodyContainer>
      </FinReportContentContainer>
    </StyledWrapper>
  );
}

export default FinReport;

const StyledWrapper = styled.div`
  margin-bottom: 30px;
`;

const FinReportContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const FintitleContainer = styled.div`
  min-height: 150px;
  @media (max-width: 650px) {
    min-height: 50px;
  }
`;
const FinBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MyCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  background: var(--efeff7);
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  color: lightgray;
`;

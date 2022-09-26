import React, {useState, useEffect}  from 'react';
import ReportContentItems from './ReportContentItems';
import styled from 'styled-components';
import HomeTownEn from './HomeTownEn';
import HomeTownKo from './HomeTownKo';


function ReportContent({
  username,
  hometown,
  maleState,
  femaleState,
  maleMeaning,
  femaleMeaning
}) {

  const [parseEnHome, setParseEnHome] = useState('');
  const [parseKoHome, setparseKoHome] = useState('');
  const [parseFeEnHome, setParseFeEnHome] = useState('');
  const [parseFeKoHome, setparseFeKoHome] = useState('');

  const setEnHomeTown = () => {Object.entries(HomeTownEn).map(([k, v]) => {
    if (k === maleState) {
      setParseEnHome(v);
    }
    if (k === femaleState) {
      setParseFeEnHome(v);
    }
  })}

  const setKoHomeTown = () => {Object.entries(HomeTownKo).map(([k, v]) => {
    if (k === maleState) {
      setparseKoHome(v);
    }
    if (k === femaleState) {
      setparseFeKoHome(v);
    }
  })}



  // 인자 x 모든 컴포넌트 렌더링시마다 실행
  useEffect(() => {
    setEnHomeTown();
    setKoHomeTown();
  },);

  return (
    <ReportContentItemsContainer>
      <ReportContentItems
        username={username}
        hometown={hometown}
        maleState={maleState}
        femaleState={femaleState}
        maleMeaning={maleMeaning}
        femaleMeaning={femaleMeaning}
        parseKoHome={parseKoHome}
        parseEnHome={parseEnHome}        
        parseFeKoHome={parseFeKoHome}
        parseFeEnHome={parseFeEnHome}
      ></ReportContentItems>
    </ReportContentItemsContainer>
  );
}

export default ReportContent;

const ReportContentItemsContainer = styled.div`
  margin-top: 30px;
`

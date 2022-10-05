import React from 'react';
import styled from 'styled-components';
import ReactApexChart from './Chart';

import UsaMap from './UsaMap';
import statesDesNImg from './stateDecNImg.json';

//컴포넌트
import ContentCelebirty from './ContentCelebirty';
import ContentState from './ContentState';
import './Finreport.css';
import ContentCharacter from './ContentCharacter';
import ContentMeaning from './ContentMeaning';
import ContentTrue from './ContentTrue';

// FinReport 리포트 내용 렌더링하는 컴포넌트
function ReportContentItems({
  username,
  maleState,
  femaleState,
  meaning,
  parseKoHome,
  parseEnHome,
  parseFeKoHome,
  parseFeEnHome,
  isNewName,
  mainState,
  nameInfo,
  femaleYear,
  maleYear,
  parseEnMainState,
  maleCelebrity,
  femaleCelebrity,
  maleCharacter,
  femaleCharacter
}) {
  const isNotZero = (data) => {
    for (var i = 0; i < data.length; i++) {
      if (data[i] != 0) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      {/* 이름 리포트 시작 */}
      <ContentTrue username={username} isNewName={isNewName} />

      {/* 중성적인 이름 */}
      {maleState.length > 0 && femaleState.length > 0 ? (
        <ContentBox>
          <h3>💌 중성적인 이름, {username}!</h3>이 이름은 남녀 성별 모두 자주
          사용되는 이름으로, 중성적인 느낌을 가지고 있어요!
          <br />
          모든 성별에서의 이름의 정보를 모두 보여드릴게요 :D
        </ContentBox>
      ) : null}

      {/* 연도별 추이 */}
      {(femaleYear.length > 0 && isNotZero(femaleYear)) ||
      (maleYear.length > 0 && isNotZero(maleYear)) ? (
        <>
          <ContentBox>
            <h3>📈 같은 이름을 가진 사람들이 얼마나 있을까요?</h3>
            <ReactApexChart
              femaleYear={femaleYear}
              maleYear={maleYear}
            ></ReactApexChart>
          </ContentBox>
        </>
      ) : null}

      <ContentMeaning meaning={meaning} username={username} />

      {/* 주관련 정보 */}
      <ContentState
        statesDesNImg={statesDesNImg}
        username={username}
        maleState={maleState}
        femaleState={femaleState}
        parseKoHome={parseKoHome}
        parseEnHome={parseEnHome}
        parseFeKoHome={parseFeKoHome}
        parseFeEnHome={parseFeEnHome}
      />

      {/* 미국 지도 */}
      {mainState.length > 0 ? (
        <ContentBox>
          <h3>🚩 당신의 명예고향, {parseEnMainState}의 위치</h3>
          <UsaMap id="usa-map" abState={mainState} userName={username} />
        </ContentBox>
      ) : null}

      {/* 동명 유명인 */}
      <ContentCelebirty
        maleCelebrity={maleCelebrity}
        femaleCelebrity={femaleCelebrity}
      />

      {/* 동명 캐릭터 */}
      <ContentCharacter
        username={username}
        maleCharacter={maleCharacter}
        femaleCharacter={femaleCharacter}
      />
    </>
  );
}

export default ReportContentItems;

const ContentBox = styled.div`
  margin: 10px;
  padding: 30px;
  background-color: #f9f7f4;
  color: black;
  border-radius: 10px;
  width: 650px;

  @media (max-width: 650px) {
    width: 250px;
    font-size: 12px;
    padding-top: 15px;
  }
`;

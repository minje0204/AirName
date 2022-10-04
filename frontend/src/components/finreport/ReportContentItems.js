import React from 'react';
import styled from 'styled-components';
import ReactApexChart from './Chart';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import UsaMap from './UsaMap';

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
  parseEnMainState
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
      {username.length > 0 && isNewName === false ? (
        <ContentBox>
          <h3>🛬 AIRNAME에서 "{username}"에 대한 이름 리포트를 준비했어요!</h3>
        </ContentBox>
      ) : null}

      {/* 없는 이름 */}
      {femaleState === '' && maleState === '' && meaning === '' ? (
        <ContentBox>
          <h3>🛬 AIR NAME에서 당신이 처음으로 사용하는 이름!</h3>
          {username}! 안타깝게도 AIRNAME 서비스에서는 없는 이름입니다😥
          <br />
          새로운 이름을 추천받고 싶다면?{' '}
          <a
            href={`https://airname.shop/entry-ko`}
            target="_self"
            className="meaning-dict-link"
          >
            [클릭] AIRNAME 추천 서비스 이용하기!
          </a>
        </ContentBox>
      ) : null}

      {/* 중성적인 이름 */}
      {maleState.length > 0 && femaleState.length > 0 ? (
        <ContentBox>
          <h3>💌 중성적인 이름, {username}!</h3>이 이름은 남녀 성별 모두 자주
          사용되는 이름으로, 중성적인 느낌을 가지고 있어요!
          <br />
          모든 성별에서의 이름의 정보를 모두 보여드릴게요 :D
        </ContentBox>
      ) : null}

      {/* 분위기 발음 유사도 */}
      {/* {typeof nameInfo === 'object' && Object.keys(nameInfo).length > 0 ? (
        <div>
          {nameInfo.type === 'atm' ? (
            <ContentBox>
              <h3>✨ {nameInfo.sim.join(', ')} ✨</h3>
              설문을 기반으로한 당신의 분위기는,
              {nameInfo.sim.map((atm) => (
                <a
                  href={`https://en.dict.naver.com/#/search?query=${atm}`}
                  target="_self"
                  className="meaning-dict-link"
                  key={atm}
                >
                  <b>{atm}</b>
                </a>
              ))}
              !
              <br />
              <br />
              분위기의 뜻의 번역이 필요하다면, 파란색 글씨의 이름 뜻을
              클릭해보세요. 네이버 영어 사전으로 이동합니다!
            </ContentBox>
          ) : (
            <ContentBox>
              <h3>📊 {nameInfo.sim}%의 발음 유사도 </h3>
              AIRNAME의 발음 알고리즘에 따르면, {username}은 당신의 한국 이름과{' '}
              {nameInfo.sim}%의 유사한 발음을 가지고 있어요! 어쩐지 친근한
              느낌이 들지 않나요?
            </ContentBox>
          )}
        </div>
      ) : null} */}

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

      {/* 이름 뜻 */}
      {meaning.length > 0 ? (
        <>
          <ContentBox>
            <h3>⚡ 이름의 뜻은 {meaning.join(', ')} 😎!</h3>
            {username}, 당신이 선택한 이름은{' '}
            {meaning.map((mean) => (
              <a
                href={`https://papago.naver.com/?sk=en&tk=ko&hn=0&st=${mean}`}
                target="_self"
                className="meaning-dict-link"
                key={mean}
              >
                <b>{mean}</b>
              </a>
            ))}
            이라는 {meaning.length}개의 뜻을 가지고 있어요!
            <br />
            <br />
            이름에 대한 뜻이 조금 생소하다면, 파란색 글씨로 변한 이름 뜻을
            클릭해보세요. 네이버 파파고가 도와줄거에요!
          </ContentBox>
        </>
      ) : null}

      {/* 남성 주 */}
      {maleState.length > 0 ? (
        <ContentBox>
          <h3>
            🏡🙍‍♂️ 남성{' '}
            <span className="tooltip">
              명예 고향
              <IconButton className="help-icon">
                <HelpIcon color="primary" />
              </IconButton>
              <span className="tooltip-text">{`미국 50개의 주에서 "${username}"가 제일 많이 쓰인곳이에요`}</span>
            </span>
            은 {parseEnHome}!
          </h3>
          {username}은 남성의 이름일 때, 통계적으로 미국의
          <a
            href={`https://ko.wikipedia.org/wiki/${parseKoHome}주`}
            target="_self"
            className="meaning-dict-link"
          >
            {parseKoHome}주
          </a>
          에서 가장 많이 사용되고 있어요!
          <br />
          <br />
          {parseKoHome}에 대한 자세한 정보가 궁금하다면 파란색 글씨를
          클릭해보세요! 클릭시, {parseKoHome}주의 위키피디아 링크로 연결됩니다!
        </ContentBox>
      ) : null}

      {/* 여성 주 */}
      {femaleState.length > 0 ? (
        <ContentBox>
          <h3>
            🏡🙍‍♀️ 여성{' '}
            <span className="tooltip">
              명예 고향
              <IconButton className="help-icon">
                <HelpIcon color="primary" />
              </IconButton>
              <span className="tooltip-text">{`미국 50개의 주에서 "${username}"가 제일 많이 쓰인곳이에요`}</span>
            </span>
            은 {parseFeEnHome}!
          </h3>
          {username}은 여성의 이름일 때, 통계적으로 미국의
          <a
            href={`https://ko.wikipedia.org/wiki/${parseFeKoHome}주`}
            target="_self"
            className="meaning-dict-link"
          >
            {parseFeKoHome}주
          </a>
          에서 가장 많이 사용되고 있어요!
          <br />
          <br />
          {parseFeKoHome}에 대한 더 많은 정보가 궁금하다면 파란색 글씨를
          클릭해보세요! 클릭시, {parseFeKoHome}주의 위키피디아 링크로
          연결됩니다!
        </ContentBox>
      ) : null}

      {/* 미국 지도 */}
      {mainState.length > 0 ? (
        <ContentBox>
          <h3>🚩 당신의 명예고향, {parseEnMainState}의 위치</h3>
          <UsaMap id="usa-map" abState={mainState} userName={username} />
        </ContentBox>
      ) : null}
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
}
.help-icon{
  padding:0px !important;
  top:-11px;
  position:relative;
  svg{
    width:15px !important;
    color: var(--primaryDark)
  }
}
.meaning-dict-link{
  margin: 5px;
  text-decoration-line: none;
  text-decoration-color: none;
  color: var(--primaryDark);
  font-family: 'SCDream7';
}
#hometown-tooltip{
  postion:relative;
}
.tooltip {
  display: inline-block;
  color: var(--primaryDark);
  font-weight: bold;
  cursor: pointer;
}
.tooltip-text {
  display: none;
  position: absolute;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  font-size: 0.8em;
  color: white;
  background: var(--primaryDark);
}
.tooltip:hover .tooltip-text {
  display: block;
}
@media (max-width: 650px) {
  width: 250px;
  font-size: 12px;
  padding-top: 15px;
`;

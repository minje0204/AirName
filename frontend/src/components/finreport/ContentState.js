import React from 'react';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';

function ContentState({
  maleState,
  femaleState,
  username,
  parseKoHome,
  parseEnHome,
  statesDesNImg,
  parseFeKoHome,
  parseFeEnHome
}) {
  return (
    <>
      {/* 남성 주 */}
      {maleState.length > 0 ? (
        <div className="fin-content">
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
          {maleState ? (
            <>
              <br />
              <div id="state-text-mobile-container">
                <span id="state-title">
                  <strong>{statesDesNImg[maleState][0]}</strong>
                </span>
                <br />
                <span id="state-desc">{statesDesNImg[maleState][1]}</span>
              </div>
            </>
          ) : (
            <div></div>
          )}
          <br />
          {parseKoHome}에 대한 자세한 정보가 궁금하다면 파란색 글씨를
          클릭해보세요! 클릭시, {parseKoHome}주의 위키피디아 링크로 연결됩니다!
        </div>
      ) : null}

      {/* 여성 주 */}
      {femaleState.length > 0 ? (
        <div className="fin-content">
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
        </div>
      ) : null}
    </>
  );
}

export default ContentState;

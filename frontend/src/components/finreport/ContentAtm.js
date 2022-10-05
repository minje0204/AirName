import React from 'react'

function ContentAtm() {
  return (
      {typeof nameInfo === 'object' && Object.keys(nameInfo).length > 0 ? (
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
      ) : null}
  )
}

export default ContentAtm

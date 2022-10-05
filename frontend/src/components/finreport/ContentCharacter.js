import React from 'react';

function ContentCharacter({maleCharacter,femaleCharacter }) {
  return (
    <>
      {/* 남자 캐릭터 */}
      {typeof maleCharacter === 'object' &&
      Object.keys(maleCharacter).length > 0 ? (
        <div className="fin-content">
          <h3>🙍‍♂️ 같은 이름을 가진 남자 캐릭터!</h3>
          {Object.entries(maleCharacter).map(([k, v]) => (
            <div key={k}>
              {k} <br />
            </div>
          ))}
        </div>
      ) : null}

      {/* 여자 캐릭터 */}
      {typeof femaleCharacter === 'object' &&
      Object.keys(femaleCharacter).length > 0 ? (
        <div className="fin-content">
          <h3>🙍‍♀️ 같은 이름을 가진 여자 캐릭터!</h3>
          {Object.entries(femaleCharacter).map(([k, v]) => (
            <div key={k}>
              {k}
              <br />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default ContentCharacter;

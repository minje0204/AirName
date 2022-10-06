import React from 'react';

function ContentTrue({username, isNewName}) {
  return (
    <>
      {username.length > 0 && isNewName === false ? (
        <div className="fin-content">
          <h3>🛬 AIRNAME에서 "{username}"의 이름 리포트를 준비했어요!</h3>
        </div>
      ) : (
        <div className="fin-content">
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
        </div>
      )}
    </>
  );
}

export default ContentTrue;

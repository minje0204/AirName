import React from 'react';


function ContentMeaning({ meaning, username, isNewName }) {
  return (
    <>
      {/* 이름 뜻 */}
      {meaning.length > 0 ? (
        <>
          <div className="fin-content">
            <h3>⚡ 이름의 뜻은 {meaning.join(', ')} 😎!</h3>
            {username}, 당신이 선택한 이름은{' '}
            {meaning.map((mean) => (
              <a
                href={`https://papago.naver.com/?sk=en&tk=ko&hn=0&st=${mean}`}
                target="_self"
                className="meaning-dict-link"
                key={`name-meaning-${mean}`}
              >
                <b>{mean}</b>
              </a>
            ))}
            이라는 {meaning.length}개의 뜻을 가지고 있어요!
            <br />
            <br />
            이름에 대한 뜻이 조금 생소하다면, 파란색 글씨로 변한 이름 뜻을
            클릭해보세요. 네이버 파파고가 도와줄거에요!
          </div>
        </>
      ) : null}

      {/* 새로운 이름은 아닌데 이름 뜻이 없을 때 */}
      {meaning.length < 0 && isNewName === false ? (
        <div className="fin-content">
          안타깝게도 AIRNAME 서비스에서 이름을 찾을 수 없어요😥
          <br />
          특별한 뜻이 있는 이름을 추천받고 싶다면?{' '}
          <a
            href={`https://airname.shop/entry-ko`}
            target="_self"
            className="meaning-dict-link"
          >
            [클릭] AIRNAME 추천 서비스 다시하기!
          </a>
        </div>
      ) : null}
    </>
  );
}

export default ContentMeaning;

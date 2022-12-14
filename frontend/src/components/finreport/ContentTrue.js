import React from 'react';

function ContentTrue({username, isNewName}) {
  return (
    <>
      {username.length > 0 && isNewName === false ? (
        <div className="fin-content">
          <h3>ð¬ AIRNAMEìì "{username}"ì ì´ë¦ ë¦¬í¬í¸ë¥¼ ì¤ë¹íì´ì!</h3>
        </div>
      ) : (
        <div className="fin-content">
          <h3>ð¬ AIR NAMEìì ë¹ì ì´ ì²ìì¼ë¡ ì¬ì©íë ì´ë¦!</h3>
          {username}! ìíê¹ê²ë AIRNAME ìë¹ì¤ììë ìë ì´ë¦ìëë¤ð¥
          <br />
          ìë¡ì´ ì´ë¦ì ì¶ì²ë°ê³  ì¶ë¤ë©´?{' '}
          <a
            href={`https://airname.shop/entry-ko`}
            target="_self"
            className="meaning-dict-link"
          >
            [í´ë¦­] AIRNAME ì¶ì² ìë¹ì¤ ì´ì©íê¸°!
          </a>
        </div>
      )}
    </>
  );
}

export default ContentTrue;

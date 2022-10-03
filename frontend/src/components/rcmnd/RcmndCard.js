import LinkButton from 'components/LinkButton';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RcmndCardItems from './RcmndCardItems';

function RcmndCard() {
  const [rcmndNames, setRcmndNames] = useState({});
  const [birth, setBirth] = useState(0);

  useEffect(() => {
    // 로컬에서 rcmndNames에 저장함
    setRcmndNames(JSON.parse(JSON.parse(localStorage.getItem('rcmndNames'))));
    setBirth(localStorage.getItem('birth'));
  }, []);

  return (
    <>
      <RcmdnCardContainer>
        {Object.entries(rcmndNames).map(([k, v]) => (
          <EachCardContainer>
            <RcmndCardItems key={k} name={k} info={v} birth={birth} />
            <LinkButton
              className="rcmnd-btn"
              to={`/finreport/${k}/${birth}`}
              style={{ textDecoration: 'none' }}
              content={`${k} 바로가기`}
            />
          </EachCardContainer>
        ))}
        {console.log(rcmndNames)}
      </RcmdnCardContainer>
    </>
  );
}

export default RcmndCard;

const RcmdnCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const EachCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    margin-bottom: 20px;
  }
`;

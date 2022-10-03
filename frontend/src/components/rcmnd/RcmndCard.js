import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import RcmndCardItems from './RcmndCardItems';

function RcmndCard() {
  const [rcmndNames, setRcmndNames] = useState({}); 
  const [birth, setBirth] = useState(0);

  useEffect(() => {
    // 로컬에서 rcmndNames에 저장함
    setRcmndNames(JSON.parse(JSON.parse(localStorage.getItem('rcmndNames'))))
    setBirth(localStorage.getItem('birth'))
  }, []);

  return (
    <>
      <RcmdnCardContainer>
        {Object.entries(rcmndNames).map(([k, v]) => (
          <RcmndCardItems key={k} name={k} info={v} birth={birth} />
        ))}
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

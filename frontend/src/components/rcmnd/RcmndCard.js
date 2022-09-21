import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import RcmndCardItems from './RcmndCardItems';

function RcmndCard() {
  const [rcmndNames, setRcmndNames] = useState({}); 

  useEffect(() => {
    // 로컬에서 rcmndNames에 저장함
    setRcmndNames(localStorage.getItem(JSON.parse('rcmndNames')))
  }, []);

  return (
    <>
      <RcmdnCardContainer>
        {Object.entries(rcmndNames).map(([k, v]) => (
          <RcmndCardItems key={k} name={k} type={v} />
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
  max-width: 1200px;
`;

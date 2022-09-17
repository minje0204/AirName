import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RcmndCardItems from './RcmndCardItems';

function RcmndCard() {
  const names = ['Jimmy', 'Tommy', 'Lisa', 'Sally'];
  return (
    <>
      <RcmdnCardContainer>
        {names.map((name) => (
          <RcmndCardItems key={name} name={name} />
        ))}
      </RcmdnCardContainer>
      <div>
        <Link to="/finreport">
          <button>선택하기</button>
        </Link>
      </div>
    </>
  );
}

export default RcmndCard;

const RcmdnCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 1300px;
`;

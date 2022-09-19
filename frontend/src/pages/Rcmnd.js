import React from 'react';
import styled from 'styled-components';
import API from '../config';
import postAxios from '../lib/postAxios';
import RcmndGuide from '../components/rcmnd/RcmndGuide';
import RcmndCard from '../components/rcmnd/RcmndCard';

function Rcmnd() {
  const data = { name: '정지은', birth: '1995' };

  const requestName = async () => {
    postAxios(`${API.ENTRY}`, data);
  };

  const names = ['Tommy', 'Lisa', 'Sally', 'Jimmy'];
  return (
    <RcmndContainer>
      <RcmndHead>
        <RcmndGuide names={names} />
      </RcmndHead>
      <RcmndBody>
        <RcmndCard />
      </RcmndBody>
      <button onClick={requestName}></button>
    </RcmndContainer>
  );
}

export default Rcmnd;

const RcmndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 830px;
`;
const RcmndHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RcmndBody = styled.div``;

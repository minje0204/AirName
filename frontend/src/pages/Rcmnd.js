import React from 'react';
import styled from 'styled-components';
// import API from '../config';
// import postAxios from '../lib/postAxios';
import RcmndGuide from '../components/rcmnd/RcmndGuide';
import RcmndCard from '../components/rcmnd/RcmndCard';

function Rcmnd() {
  // const data = { title: '제목', body: 'bar', userId: 1 }
  
  // const requestName = async () => {
  //   postAxios(`${API.POST}`, data);
  // };

  const names = ['Tommy', 'Lisa', 'Sally', 'Jimmy'];
  return (
    <RcmndContainer>
      <RcmndHead>
        <RcmndGuide names={names} />
      </RcmndHead>
      <RcmndBody>
        <RcmndCard />
      </RcmndBody>
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

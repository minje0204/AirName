import React from 'react';
import styled from 'styled-components';

function RcmndGuide() {
  return (
    <RcmndGuideWrapper>
      이름에 대한 자세한 정보를 확인 한 후, 한가지 이름을 선택해주세요 !
    </RcmndGuideWrapper>
  );
}

export default RcmndGuide;

const RcmndGuideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #F9F7F4;
  width: 100vw;
  height: 50px;
`;

import styled from 'styled-components';

function RcmndGuide() {
  return (
    <RcmndGuideWrapper>
      가장 마음에드는 이름을 선택해주세요 !
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
  font-size: 25px;
  font-weight: 600;
  width: 100vw;
  height: 80px;
`;

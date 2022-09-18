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
  font-size: clamp(15px, calc(1vh + 1vw), 28px);
  font-weight: 600;
`;

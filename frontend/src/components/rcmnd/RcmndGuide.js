import styled from 'styled-components';

function RcmndGuide() {
  return (
    <RcmndGuideWrapper>
      카드를 뒤집어보고 <br/>
      가장 마음에드는 이름을 선택해주세요 !<br/>
      이름에 따른 리포트를 조회 할 수 있어요.📊
    </RcmndGuideWrapper>
  );
}

export default RcmndGuide;

const RcmndGuideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-size: clamp(15px, calc(1vh + 1vw), 28px);
  font-weight: 700;
`;

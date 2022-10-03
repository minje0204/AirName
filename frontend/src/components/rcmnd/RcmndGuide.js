import styled from 'styled-components';

function RcmndGuide() {
  return (
    <RcmndGuideWrapper className="rcmnd-guide-font">
      <span id="rcmnd-guide" className="pattern">
      🔄 카드를 눌러서 뒤집어보세요 ! 
      </span>
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
  font-weight: 700;  
  height: 100%;
  #rcmnd-guide{

    padding: 5px;
  }
  
  @media (max-width: 650px) {
    margin-top: 10px;
    margin-bottom: 40px;
  }
`;

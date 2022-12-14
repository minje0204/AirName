import styled from 'styled-components';

function RcmndGuide() {
  return (
    <RcmndGuideWrapper className="rcmnd-guide-font">
      <span id="rcmnd-guide" className="pattern">
      ๐ ์นด๋๋ฅผ ๋๋ฌ์ ๋ค์ง์ด๋ณด์ธ์ ! 
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

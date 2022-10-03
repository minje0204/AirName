import styled from 'styled-components';

function ReportFooter() {
  return (
    <ReportFooterContainer>
      <FooterLeft>
        <b>
        (주)역삼철학관
        </b>
        <br />
        <br />
        김상협 염수홍 윤여빈 전선영 정지은 조민제
        <br />
        서울 강남구 테헤란로 212, 801호
        <br />
        8F, 212 Teheran-ro, Gangnam-gu, Seoul, Republic of Korea
        <br />
        서비스 이용 문의 2riing2@gmail.com
        <br />
        사업 제휴 문의 2riing2@gmail.com
        <br />
      </FooterLeft>
      <FooterRight> 
      
      </FooterRight>
    </ReportFooterContainer>
  );
}

export default ReportFooter;

const ReportFooterContainer = styled.div`
  display: flex;
  justify-content: spacebetween;
  align-items: center;
  font-size: 13px;
  @media (max-width: 650px) {
    font-size: 9px;
  }
`;

const FooterLeft = styled.div``

const FooterRight = styled.div``

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import FinBtns from '../components/finreport/FinBtns';
import FinTitle from '../components/finreport/FinTitle';
import MyCard from '../components/finreport/MyCard';
import ReportContent from '../components/finreport/ReportContent';

function FinReport() {
  const hometown = 'Korea';
  const { username } = useParams();
  return (
    <StyledWrapper>
      <FinTitle username={username} hometown={hometown} />
      <FinBtns />
      <MyCard username={username} hometown={hometown}/>
      <ReportContent username={username} hometown={hometown} />
    </StyledWrapper>
  );
}

export default FinReport;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
  flex-direction: column;
`;

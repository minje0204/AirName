import React from 'react';
import FinBtns from '../components/finreport/FinBtns';
import FinTitle from '../components/finreport/FinTitle';
import styled from 'styled-components';
import MyCard from '../components/finreport/MyCard';
import ReportContent from '../components/finreport/ReportContent';

function FinReport() {
  return (
    <StyledWrapper>
      <div>
        <FinTitle />
        <FinBtns />
        <MyCard />
        <ReportContent />
      </div>
    </StyledWrapper>
  );
}

export default FinReport;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
`;

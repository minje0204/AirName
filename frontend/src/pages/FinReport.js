import React from 'react';
import styled from 'styled-components';
import FinBtns from '../components/finreport/FinBtns';
import FinTitle from '../components/finreport/FinTitle';
import MyCard from '../components/finreport/MyCard';
import ReportContent from '../components/finreport/ReportContent';

function FinReport() {
  const hometown = 'multicampus';
  const username = 'junny';
  return (
    <StyledWrapper>
      <div>
        <FinTitle username = {username} hometown = {hometown}/>
        <FinBtns />
        <MyCard />
        <ReportContent username = {username} hometown = {hometown}/>
      </div>
    </StyledWrapper>
  );
}

export default FinReport;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

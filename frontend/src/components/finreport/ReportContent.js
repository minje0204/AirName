import React from 'react';
import ReportContentItems from './ReportContentItems';
import styled from 'styled-components';


function ReportContent({
  username,
  hometown,
  maleState,
  femaleState,
  maleMeaning,
  femaleMeaning
}) {
  return (
    <ReportContentItemsContainer>
      <ReportContentItems
        username={username}
        hometown={hometown}
        maleState={maleState}
        femaleState={femaleState}
        maleMeaning={maleMeaning}
        femaleMeaning={femaleMeaning}
      ></ReportContentItems>
    </ReportContentItemsContainer>
  );
}

export default ReportContent;

const ReportContentItemsContainer = styled.div`
  margin-top: 30px;
`

import React from 'react';
import ReportContentItems from './ReportContentItems';
import styled from 'styled-components';

function ReportContent({
  username,
  hometown,
  maleState,
  femaleState,
  meaning,
  parseKoHome,
  parseEnHome,
  parseFeKoHome,
  parseFeEnHome,
  isNewName,
  nameInfo
}) {
  return (
    <ReportContentItemsContainer>
      
      <ReportContentItems
        username={username}
        hometown={hometown}
        maleState={maleState}
        femaleState={femaleState}
        meaning={meaning}
        parseKoHome={parseKoHome}
        parseEnHome={parseEnHome}
        parseFeKoHome={parseFeKoHome}
        parseFeEnHome={parseFeEnHome}
        isNewName={isNewName}
        nameInfo={nameInfo}
      ></ReportContentItems>
    </ReportContentItemsContainer>
  );
}

export default ReportContent;

const ReportContentItemsContainer = styled.div`
  margin-top: 30px;
`;

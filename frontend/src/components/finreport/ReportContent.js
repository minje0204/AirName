import React from 'react';
import ReportContentItems from './ReportContentItems';

function ReportContent({
  username,
  hometown,
  maleState,
  femaleState,
  maleMeaning,
  femaleMeaning
}) {
  return (
    <div>
      <ReportContentItems
        username={username}
        hometown={hometown}
        maleState={maleState}
        femaleState={femaleState}
        maleMeaning={maleMeaning}
        femaleMeaning={femaleMeaning}
      ></ReportContentItems>
    </div>
  );
}

export default ReportContent;

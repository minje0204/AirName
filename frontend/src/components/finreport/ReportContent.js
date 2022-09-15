import React from 'react';

import ReportContentItems from './ReportContentItems'
function ReportContent(props) {
  return (
    <div>
      <ReportContentItems username = {props.username} hometown = {props.hometown}></ReportContentItems>
    </div>
  );
}

export default ReportContent;

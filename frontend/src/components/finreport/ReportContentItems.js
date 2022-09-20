import React from 'react';
import styled from 'styled-components';

function ReportContentItems(props) {
  return (
    <div>
      <ContentBox>
        <h3>💕 당신의 명예 고향은 {props.hometown}!</h3>
        {props.username}이라는 이름은 {props.hometown}에서 가장 많이 사용되는
        이름이에요!
      </ContentBox>
    </div>
  );
}

export default ReportContentItems;

const ContentBox = styled.div`
  margin: 10px;
  padding: 30px;
  background-color: #f9f7f4;
  color: black;
  border-radius: 10px;
  width: 650px;
}
@media (max-width: 650px) {
  width: 250px;
  font-size: 12px;
  padding-top: 15px;
`;

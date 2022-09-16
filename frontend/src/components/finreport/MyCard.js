import React from 'react';
import styled from 'styled-components';
import SampleTicket from '../../asset/img/finreport/SampleTicket.png';

function MyCard() {
  return (
    <MyCardContainter>
      <MyCardImg src={SampleTicket} alt="MyTicket" />
    </MyCardContainter>
  );
}

export default MyCard;
const MyCardContainter = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
`;

const MyCardImg = styled.img`
  width: 80%;
`;

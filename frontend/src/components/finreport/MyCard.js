import React from 'react';
import SampleTicket from '../../asset/img/finreport/SampleTicket.png';
import styled from 'styled-components';

function MyCard(props) {
  return (
    <MyCardContainter>
      <MyCardImg src={SampleTicket} alt='MyTicket'/>
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
`
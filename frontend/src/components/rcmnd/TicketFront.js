import React from 'react';
import styled from 'styled-components';
import TicketHeadAirplane from '../../asset/img/rcmnd/TicketHeadAirplane.png';
import Barcode from '../../asset/img/rcmnd/Barcode.png';

function TicketFront() {
  return (
    <div>
      <TicketContainer>
        <TicketHead>
          <img src={TicketHeadAirplane} />
          AIR TICKET
        </TicketHead>
        <TicketBody>
          <TickeNameContainer>Jimmy</TickeNameContainer>
          <TicketBarcode>
            <img src={Barcode} />
          </TicketBarcode>
        </TicketBody>
      </TicketContainer>
    </div>
  );
}

export default TicketFront;

const TicketContainer = styled.div`
  width: 600px;
  height: 300px:
`;
const TicketHead = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1565c0;
  fontsize: 20px;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 50px:
`;
const TicketBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 250px;
`;
const TickeNameContainer = styled.div`
  font-size: 80px;
`;

const TicketBarcode = styled.div``;

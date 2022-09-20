import React from 'react';
import styled from 'styled-components';
import QRImg from '../../asset/img/finreport/QRImg.png';
import Barcode from '../../asset/img/finreport/Barcode.png';
import Airplane from '../../asset/img/finreport/Airplane.png';

function MyCard() {
  return (
    <TicketWrapper>
      <TicketHead>
        <TicketLeftHead>AIR NAME</TicketLeftHead>
        <TicketRightHead>Right</TicketRightHead>
      </TicketHead>
      <TicketBody>
        <TicketLeft>
          <PassangerInfo>
            <Passanger>
              <PassangerTitle>Name of Passenger</PassangerTitle>
              <PassangerBody>Tommy</PassangerBody>
            </Passanger>
            <Seat>
              <SeatTitle>SEAT</SeatTitle>
              <SeatBody>108A</SeatBody>
            </Seat>
            <Gate>
              <GateTitle>GATE</GateTitle>
              <GateBody>7</GateBody>
            </Gate>
          </PassangerInfo>
          <BarcodeContainer>
            <img id='barcode-img' src={Barcode} />
          </BarcodeContainer>
        </TicketLeft>
        <TicketRight>
          <TicketJourney>
            <Depart>KOR</Depart>
            <AirplaneImg>
              <img id='airplane-img' src={Airplane} />
            </AirplaneImg>
            <Arrive>ATL</Arrive>
            <QR>
              <img id='qr-img' src={QRImg} />
            </QR>
          </TicketJourney>
        </TicketRight>
      </TicketBody>
    </TicketWrapper>
  );
}

export default MyCard;
const TicketWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 300px;
`;

const TicketHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;
const TicketBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
`;

const TicketLeftHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primaryDark);
  color: white;
  border-top-left-radius: 15px;
  width: 70%;
  height: 100%;
`;

const TicketRightHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primaryDark);
  color: white;
  border-top-right-radius: 15px;
  border-left: 1px dashed black;
  width: 30%;
  height: 100%;
`;

const TicketLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-bottom-left-radius: 15px;
  width: 70%;
  height: 100%;
`;
const TicketRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom-right-radius: 15px;
  border-left: 1px dashed black;
  width: 30%;
  height: 100%;
`;
const PassangerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Passanger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;
const PassangerTitle = styled.div`
  font-size: 20px;
  font-family: 'SCDream3';
`;
const PassangerBody = styled.div`
  font-size: 40px;
  font-family: 'SCDream7';
`;
const Seat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;
const SeatTitle = styled.div`
  font-size: 20px;
  font-family: 'SCDream3';
`;
const SeatBody = styled.div`
  font-size: 40px;
  font-family: 'SCDream7';
`;
const Gate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;

`;
const GateTitle = styled.div`
  font-size: 20px;
  font-family: 'SCDream3';
`;
const GateBody = styled.div`
  font-size: 40px;
  font-family: 'SCDream7';
`;
const BarcodeContainer = styled.div`
  margin-top: 20px;
`;

const TicketJourney = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Depart = styled.div`
font-size: 20px;
`;
const AirplaneImg = styled.div`

#airplane-img{
  width: 30px;
}
`;
const Arrive = styled.div`
font-size: 20px;`;
const QR = styled.div`
margin-top: 10px;
#qr-img{
  width: 90px;  
}
`;

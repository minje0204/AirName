import styled from 'styled-components';
import QRImg from '../../asset/img/finreport/QRImg.png';
import Barcode from '../../asset/img/finreport/Barcode.png';
import Airplane from '../../asset/img/finreport/Airplane.png';
import TicketHeadAirplane from '../../asset/img/finreport/TicketHeadAirplane.png';
import React from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function MyCard({ username, hometown }) {
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector('.card')).then((blob) => {
      saveAs(blob, 'card.png');
    });
  };

  return (
    <TicketWrapper className="card" onClick={onDownloadBtn}>
      <TicketHead>
        <TicketLeftHead>
          <img id="head-img" src={TicketHeadAirplane} />
          AIR NAME TICKET
        </TicketLeftHead>
        <TicketRightHead>BOARDING PASS</TicketRightHead>
      </TicketHead>
      <TicketBody>
        <TicketLeft>
          <PassangerInfo>
            <Passanger>
              <PassangerTitle>Name of Passenger</PassangerTitle>
              <PassangerBody>{username}</PassangerBody>
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
            <img id="barcode-img" src={Barcode} />
          </BarcodeContainer>
        </TicketLeft>
        <TicketRight>
          <TicketJourney>
            <Depart>KOR</Depart>
            <AirplaneImg>
              <img id="airplane-img" src={Airplane} />
            </AirplaneImg>
            <Arrive>{hometown}</Arrive>
            <QR>
              <img id="qr-img" src={QRImg} />
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
  @media (max-width: 650px) {
    width: 300px;
    height: 129px;
  }
`;

const TicketHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  @media (max-width: 650px) {
    height: 21.5px;
  }
`;
const TicketBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  @media (max-width: 650px) {
    height: 107.5px;
  }
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
  font-size: 25px;
  font-family: 'SCDream7';
  font-style: italic;
  #head-img {
    width: 50px;
  }
  @media (max-width: 650px) {
    border-top-left-radius: 5px;
    font-size: 10px;
    #head-img {
      width: 20px;
    }
  }
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
  font-size: 20px;
  font-family: 'SCDream7';
  font-style: italic;
  @media (max-width: 650px) {
    border-top-right-radius: 5px;
    font-size: 5px;
    border-left: 0.3px dashed black;
  }
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
  @media (max-width: 650px) {
    border-bottom-left-radius: 5px;
  }
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
  @media (max-width: 650px) {
    border-left: 0.3px dashed black;
    border-bottom-right-radius: 5px;
  }
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
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const PassangerBody = styled.div`
  font-size: 40px;
  font-family: 'SCDream7';
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;
const Seat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SeatTitle = styled.div`
  font-size: 20px;
  font-family: 'SCDream3';
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const SeatBody = styled.div`
  font-size: 40px;
  font-family: 'SCDream7';
  @media (max-width: 650px) {
    font-size: 20px;
  }
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
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const GateBody = styled.div`
  font-size: 40px;
  font-family: 'SCDream7';
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;
const BarcodeContainer = styled.div`
  margin-top: 20px;
  @media (max-width: 650px) {
    margin-top: 0px;
    #barcode-img {
      width: 80px;
    }
  }
`;

const TicketJourney = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Depart = styled.div`
  font-size: 20px;
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const AirplaneImg = styled.div`
  #airplane-img {
    width: 30px;
  }
  @media (max-width: 650px) {
    #airplane-img {
      width: 15px;
    }
  }
`;
const Arrive = styled.div`
  font-size: 20px;
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const QR = styled.div`
  margin-top: 10px;
  #qr-img {
    width: 90px;
  }
  @media (max-width: 650px) {
    margin-top: 0px;
    #qr-img {
      width: 30px;
    }
  }
`;

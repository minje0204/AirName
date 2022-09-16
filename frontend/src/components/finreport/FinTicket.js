import React from 'react';
import styled from 'styled-components';

function TicketFront(props) {
  return (
    <TicketWrapper>
      <TicketHead>
        AIR NAME
      </TicketHead>
      <TicketBody>
        <TicketLeft>
          <Passanger>
            <PassangerTitle>
            </PassangerTitle>
            <PassangerBody>
            </PassangerBody>
          </Passanger>
          <Seat>
            <SeatTitle>
            </SeatTitle>
            <SeatBody>
            </SeatBody>
          </Seat>
          <Gate>
            <GateTitle>
            </GateTitle>
            <GateBody>
            </GateBody>
          </Gate>
          <Barcode>
            <img />
          </Barcode>
        </TicketLeft>
        <TicketRight>
          <TicketJourney>
            <Depart>
            </Depart>
            <AirplaneImg>
              <img />
            </AirplaneImg>
            <Arrive>
            </Arrive>
            <QR>
              <img />
            </QR>
          </TicketJourney>
        </TicketRight>
      </TicketBody>
    </TicketWrapper>
  );
}

export default TicketFront;


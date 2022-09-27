import styled from 'styled-components';
import TicketHeadAirplane from '../../asset/img/rcmnd/TicketHeadAirplane.png';
// import {isAndroid} from 'react-device-detect';
import './Rcmnd.css';

function TicketFront({ name, type, sim }) {

  // 대문자이름
  let uppername = name.toUpperCase();

  return (
    <div>
      <TicketContainer>
        <TicketHead className="shadow ticket-head-font">
          <img className="airplan-img" src={TicketHeadAirplane} />
          AIR TICKET
        </TicketHead>
        <TicketBody className="shadow pattern">
          <NameTTSContainer>
            <TickeNameContainer className="ticket-info-font">
              { type === "sound" ? 
              <span>당신의 이름과 {sim}% 유사한 발음을 가지고 있어요!</span> 
              : <span>이름이 가지고 있는 분위기 {sim}</span> 
              }
              
            </TickeNameContainer>
          </NameTTSContainer>
        </TicketBody>
        <TicketBottom className="shadow ticket-bottom-font">
          AIR NAME {uppername} AIR NAME {uppername}
        </TicketBottom>
      </TicketContainer>
    </div>
  );
}

export default TicketFront;
const TicketContainer = styled.div`
  aspect-ratio: 2;
  width: 600px;
  margin: 20px;
  @media (max-width: 650px) {
    width: 300px;
    margin: 10px;
  }
`;
const TicketHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1565c0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 20%;
`;
const TicketBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 65%;
`;
const TickeNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline;
  padding: 20px;
`;

const NameTTSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TicketBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1565c0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 15%;
`;

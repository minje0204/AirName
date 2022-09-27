import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TicketHeadAirplane from '../../asset/img/rcmnd/TicketHeadAirplane.png';
import TicketTTSBtn from '../TTSBtn';
// import {isAndroid} from 'react-device-detect';
import './Rcmnd.css';

function TicketFront({ name, type }) {
  const selectName = (e) => {
    e.stopPropagation();
    console.log(name);
  };

  return (
    <div>
      <TicketContainer>
        <TicketHead className="shadow ticket-head-font">
          <img className="airplan-img" src={TicketHeadAirplane} />
          AIR TICKET
        </TicketHead>
        <TicketBody className="shadow pattern">
          <NameTTSContainer>
            <TickeNameContainer className="ticket-name-font">
              {name}
            </TickeNameContainer>
            <TicketTTSBtnContainer>
              <TicketTTSBtn username={name} type="rcmnd" />
            </TicketTTSBtnContainer>
          </NameTTSContainer>
        </TicketBody>
        <TicketBottom>
          <div>
            <Link to={`/finreport/${name}`}>
              <button
                className="btn-15 custom-btn"
                id={type}
                onClick={(e) => {
                  selectName(e);
                }}
              >
                {name} 이름 리포트 보러가기 ➡ ➡ ➡ ➡
              </button>
            </Link>
          </div>
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
  height: 65%;
`;
const TickeNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline;
`;

const NameTTSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketTTSBtnContainer = styled.div`
  height: 40px;
  padding-top: 12px;
  @media (max-width: 650px) {
    height: 20px;
    padding-top: 0px;
    padding-bottom: 5px;
  }
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

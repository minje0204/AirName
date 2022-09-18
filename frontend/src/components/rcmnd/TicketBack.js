import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import TicketHeadAirplane from '../../asset/img/rcmnd/TicketHeadAirplane.png';
import TicketTTSBtn from './TicketTTSBtn';
import './Rcmnd.css';

function TicketFront(props) {
  return (
    <div>
      <TicketContainer>
        <TicketHead>
          <img src={TicketHeadAirplane} />
          AIR TICKET
        </TicketHead>
        <TicketBody>
          <div>
            <TickeNameContainer>{props.name}</TickeNameContainer>
            <TicketTTSBtnContainer>
              <TicketTTSBtn username={props.name} />
            </TicketTTSBtnContainer>
          </div>
          <SelectBtnContainer>
            <button className="btn-15 custom-btn">내 이름은 {props.name}로 결정 !</button>
          </SelectBtnContainer>
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
  display: inline;
`;
const TicketTTSBtnContainer = styled.div`
  display: inline;
  margin-left: 20px;
  font-family: 'SCDream7';
`;

const SelectBtnContainer = styled.div`
  margin-top: 20px;
`;

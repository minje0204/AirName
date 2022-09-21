import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import TicketHeadAirplane from '../../asset/img/rcmnd/TicketHeadAirplane.png';
// import TicketTTSBtn from './TicketTTSBtn';
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
        <TicketHead>
          <img className="airplan-img" src={TicketHeadAirplane} />
          AIR TICKET
        </TicketHead>
        <TicketBody>
          <div>
            <TickeNameContainer>
              {name}
              {/* { isAndroid ?
              null : <TicketTTSBtn username={name} /> 
              } */}
            </TickeNameContainer>
          </div>
          <SelectBtnContainer>
            <Link to={`/finreport/${name}`}>
              <button
                className="btn-15 custom-btn "
                id={type}
                onClick={(e) => {
                  selectName(e);
                }}
              >
                내 이름은 {name}로 결정 !
              </button>
            </Link>
          </SelectBtnContainer>
        </TicketBody>
      </TicketContainer>
    </div>
  );
}

export default TicketFront;
const TicketContainer = styled.div`
  width: 40vw;
  min-width: 300px;
  max-width: 500px;
  aspect-ratio: 2;
  margin: 20px;
`;
const TicketHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1565c0;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 20%;
  font-size: clamp(10px, calc(0.5vw + 11.08px), 40px);
`;
const TicketBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 80%;
`;
const TickeNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(20px, min(calc(3vh + 20px), calc(3vw + 20px)), 80px);
  font-weight: 600;
  display: inline;
`;
// const TicketTTSBtnContainer = styled.div`
//   display: inline;
//   margin-left: 20px;
//   font-family: 'SCDream7';
// `;

const SelectBtnContainer = styled.div`
  margin-top: 20px;
`;

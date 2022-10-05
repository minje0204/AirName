import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TicketHeadAirplane from '../../asset/img/rcmnd/TicketHeadAirplane.png';
import { enToKoAttribute } from '../loading/attributeDictionary';
import './Rcmnd.css';

function TicketFront({ name, type, sim, rank, percent }) {
  // 대문자이름
  let uppername = name.toUpperCase();
  const [birth, setBirth] = useState('');

  useEffect(() => {
    setBirth(localStorage.getItem('birth'));
  }, []);

  return (
    <div>
      <TicketContainer>
        <TicketHead className="shadow ticket-head-font">
          {/* <img className="airplan-img" src={TicketHeadAirplane} /> */}
          AIR TICKET
        </TicketHead>
        <TicketBody className="shadow pattern">
          <NameTTSContainer>
            <TickeNameContainer>
              {type === 'sound' ? (
                <div id="info-container">
                  <div className="info-head-font"></div>
                  <div className="info-body-font">
                    <span className="info-font-bold">[발음 유사도]</span> <br />
                    당신의 이름과 {sim}% 유사한 발음!
                    <br />
                    <span className="info-font-bold">
                      [{birth}년에 얼마나 사용되었을까?]
                    </span>
                    <br />
                    {name}는{' '}
                    <span className="info-font-bold-red">{rank}등</span>
                    (상위{Math.round(percent)}%)으로 많이 사용되었습니다. <br />
                  </div>
                </div>
              ) : (
                <div id="info-container">
                  <div className="info-head-font"></div>
                  <div className="info-body-font">
                    {sim === '{}' ? (
                      <>
                        🎠설문을 통해 성격을 알 수 없어서 랜덤으로 추천된
                        이름이에요.
                      </>
                    ) : (
                      <>
                        🎠설문을 통해 알 수 있는 성격 기반으로 추천된 이름이에요
                      </>
                    )}
                    <br />
                    <span className="info-font-bold">
                      [이름이 가지고 있는 분위기]<br/>
                    </span>
                    
                    {/* userInput기반 */}
                    {Object.entries(sim.userInput).map(([att, value]) => (
                      <>
                        {Object.entries(enToKoAttribute).map(([k, v]) => (
                          <>{att == k ? <span className="info-font-bold-red">{'#'}{v}{'  '}</span> : null}</>
                        ))}
                      </>
                    ))}

                    {/* 기본 이름이 가지고 있는 분위기 */}
                    {Object.entries(sim.other).map(([att, value]) => (
                      <>
                        {Object.entries(enToKoAttribute).map(([k, v]) => (
                          <>{att == k ? <>{'#'}{v}{'  '}</> : null}</>
                        ))}
                      </>
                    ))}
                    <br />
                    <span className="info-font-bold">
                      [{birth}년에 얼마나 사용되었을까?]
                    </span>
                    <br />
                    {name}는{' '}
                    <span className="info-font-bold-red">{rank}등</span>
                    (상위{Math.round(percent)}%)으로 많이 사용되었습니다. <br />
                  </div>
                  <div className="info-body-font"></div>
                </div>
              )}
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
  #info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
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

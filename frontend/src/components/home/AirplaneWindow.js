import React from 'react';
import './Home.css';
import styled from 'styled-components';

function Window() {
  return (
    <>
      <Step2>
        <Step1>
          <div className="animated-window">
            <div className="window">
              <img className="cloud" src="/cloud.jpg" alt="window" />
            </div>
          </div>
        </Step1>
      </Step2>
    </>
  );
}

export default Window;

const Step1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.0009);
  width: 300px;
  height: 420px;
  padding-bottom: 10px;
  border-top-left-radius: 180px;
  border-top-right-radius: 180px;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  border-style: solid;
  border-color: #e0dede;
  border-width: 1px;
  box-shadow:inset 5px 5px 70px rgba(0, 0, 0, 0.2);
  .animated-window{

  }

`;

const Step2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(0, 0, 0, 0.0009);
  width: 340px;
  height: 470px;
  padding-bottom: 10px;
  margin-right: 100px;
  border-top-left-radius: 190px;
  border-top-right-radius: 190px;
  border-bottom-left-radius: 170px;
  border-bottom-right-radius: 170px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 1px;
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.5);
`;



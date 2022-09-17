import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import styled from 'styled-components';
import ReadOnlyInput from './EntryCardReadOnlyInput';
import SubmitBtn from './EntryCardBtn';

export default function EntryCard() {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  return (
    <StyledWrapper>
      <div id="card">
        <Container sx={{ bgcolor: '#F9AD33', height: '100px' }}>
          <div id="title">
            <div>THE UNITED STATES OF AMERICA</div>
            <div id="title_b">ARRIVAL CARD</div>
          </div>
        </Container>
        <Container id="content" sx={{ bgcolor: '#F9F7F4', height: '60vh' }}>
          <div className="qAndA">
            <div className="question">Name</div>
            <TextField
              variant="outlined"
              color="warning"
              placeholder="한국어로 이름을 입력해주세요"
              id="answer"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="qAndA">
            <div className="question">Birth</div>
            <TextField
              variant="outlined"
              color="warning"
              placeholder="생년월일 8자리를 입력해주세요"
              id="answer"
              onChange={e => {
                setBirth(e.target.value);
              }}
            />
          </div>
          <ReadOnlyInput q="English Name" a="" />
          <ReadOnlyInput q="Airline No." a="AIR NAME A108" />
          <ReadOnlyInput q="Nationality" a="Korea" />
        </Container>
      </div>
      <div id="btn">{name && birth.length === 8 ? <SubmitBtn /> : null}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #card {
    width: 500px;
  }
  #title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  #title_b {
    font-family: 'SCDream7';
    font-size: 25px;
  }
  #content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .qAndA {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .question {
    width: 150px;
    margin: auto 0;
  }
  #answer {
    font-family: 'Daheng';
    width: 200px;
  }
  #btn {
    float: right;
  }
`;

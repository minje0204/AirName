import React, { useState } from 'react';
import axios from 'axios';

import {
  Container,
  TextField,
  // Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReadOnlyInput from './EntryCardReadOnlyInput';

// import postAxios from '../../lib/postAxios';
import API from '../../config';

function EntryCardEn() {
  const [nameKo, setNameKo] = useState('');
  const nameKoCheck = /[^가-힣]/;
  const [nameKoError, setNameKoError] = useState(false);
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const birthCheck = /^(19|20)\d{2}/;
  const [birthError, setBirthError] = useState(false);
  const [nameEn, setNameEn] = useState('');
  const nameEnCheck = /[^a-zA-Z]/;
  const [nameEnError, setNameEnError] = useState(false);
  const navigate = useNavigate();

  const linkToSurvey = () => {
    navigate('/survey');
  };

  const saveToStorage = (localdata) => {
    localStorage.setItem('PNname', localdata);
    localStorage.setItem('birth', birth);
    localStorage.setItem('gender', gender);
  };

  const sendData = async () => {
    const data = { name: nameKo, birth: birth, gender: gender };
    console.log(data);
    axios.post(`${API.ENTRY}`, data).then((res) => {
      saveToStorage(JSON.stringify(res.data));
    });
    linkToSurvey();
  };

  return (
    <StyledWrapper>
      <div id="card">
        <Container sx={{ bgcolor: 'var(--secondaryMain)', height: '100px' }}>
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
              className="answer"
              inputProps={{
                maxLength: 5
              }}
              error={nameKoError}
              helperText={nameKoError ? '다시 입력해주세요' : null}
              onBlur={(e) => {
                const nameKoTmp = e.target.value;
                if (nameKoCheck.test(nameKoTmp) || nameKoTmp.length === 1) {
                  setNameKoError(true);
                } else {
                  setNameKo(nameKoTmp);
                  setNameKoError(false);
                }
              }}
            />
          </div>
          <div className="qAndA">
            <div className="question">Gender</div>
            <FormControl className="answer">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <FormControlLabel value="m" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="f"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="qAndA">
            <div className="question">Birth Year</div>
            <TextField
              variant="outlined"
              inputProps={{
                maxLength: 4
              }}
              className="answer"
              error={birthError}
              helperText={birthError ? '다시 입력해주세요' : null}
              onBlur={(e) => {
                const birthTmp = e.target.value;
                if (!birthCheck.test(birthTmp) || birthTmp.length < 4) {
                  setBirthError(true);
                } else {
                  setBirth(birthTmp);
                  setBirthError(false);
                }
              }}
            />
          </div>
          <div className="qAndA">
            <div className="question">English Name</div>
            <TextField
              variant="outlined"
              className="answer"
              error={nameEnError}
              helperText={nameEnError ? '다시 입력해주세요' : null}
              onBlur={(e) => {
                const nameEnTmp = e.target.value;
                if (nameEnCheck.test(nameEnTmp)) {
                  setNameEnError(true);
                } else {
                  setNameEn(nameEnTmp);
                  setNameEnError(false);
                }
              }}
            />
          </div>
          <ReadOnlyInput q="Airline No." a="AIR NAME A108" />
          <ReadOnlyInput q="Nationality" a="Korea" />
        </Container>
      </div>

      <div id="btn">
        {nameKo && gender && birth && nameEn ? (
          <button id="send-btn" onClick={sendData}>
            내 영어 이름 리포트 보러가기
          </button>
        ) : null}
      </div>
    </StyledWrapper>
  );
}

export default EntryCardEn;

// function SubmitBtn() {
//   return (
//     <button
//       variant="contained"
//       color="warning"
//       size="large"
//       component={Link}
//       to="/finreport/:selectedName"
//       sx={{ margin: '10px' }}
//     >
//       <span style={{ fontSize: '20px' }}>내 영어 이름 리포트 보러가기</span>
//     </button>
//   );
// }

const StyledWrapper = styled.div`
  #card {
    width: 100%;
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
  .answer {
    font-family: 'Daheng';
    font-size: 20px;
    width: 200px;
  }
  #btn {
    display: flex;
    justify-content: center;
  }
  #send-btn {
    font-size: 20px;
    background-color: var(--secondaryMain);
    margin: 20px;
    padding: 15px;
    border: 0;
  }
`;

import React, { useEffect, useState } from 'react';
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

function EntryCardKo() {
  const [nameKo, setNameKo] = useState('');
  const nameKoCheck = /[^가-힣]/;
  const [nameKoError, setNameKoError] = useState(false);
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const birthCheck = /^(19|20)\d{2}/;
  const [birthError, setBirthError] = useState(false);
  const navigate = useNavigate();
  // const [isSoundError, setisSoundError] = useState(false);

  const linkToSurvey = () => {
    navigate('/survey');
  };

  const saveToStorage = (localdata) => {
    console.log(localdata);
    localStorage.setItem('nameKo', nameKo);
    localStorage.setItem('birth', birth);
    localStorage.setItem('gender', gender);
  };

  const sendData = async () => {
    const data = { name: nameKo, gender: gender, birth: birth };
    console.log(data);
    saveToStorage(data);
    // axios
    //   .post(`${API.ENTRY}`, data)
    //   .then((res) => {
    //     console.log(res)
    //     saveToStorage(JSON.stringify(res.data));
    //   })
    //   .catch((err) => {
    //     if (err.message = "Request failed with status code 500"){
    //       console.log('500번 에러 ! ')
    //     }
    //   });
    linkToSurvey();
  };

  // useEffect(() => {
  //   if(isError)
  // }, [isSoundError]);

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
          <div className="qAndA custom-input">
            <div className="question to-move">Name</div>
            <TextField
              variant="outlined"
              className="answer"
              placeholder="한글 이름 입력"
              inputProps={{
                maxLength: 7
              }}
              error={nameKoError}
              helperText={nameKoError ? '다시 입력해주세요' : null}
              onChange={(e) => {
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
                <FormControlLabel value="M" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="F"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="qAndA custom-input">
            <div className="question to-move">Birth Year</div>
            <TextField
              variant="outlined"
              inputProps={{
                maxLength: 4
              }}
              className="answer"
              placeholder="태어난 해 ex)1995"
              error={birthError}
              helperText={birthError ? '다시 입력해주세요' : null}
              onChange={(e) => {
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
          <ReadOnlyInput q="English Name" a=" " />
          <ReadOnlyInput q="Airline No." a="AIR NAME A108" />
          <ReadOnlyInput q="Nationality" a="Korea" />
        </Container>
      </div>
      <div id="btn">
        {nameKo && gender && birth ? (
          <button id="send-btn" onClick={sendData}>
            영어 이름이 없는데 어떡하지?
          </button>
        ) : (
          <button
            id="send-btn"
            onClick={sendData}
            style={{ visibility: 'hidden' }}
          >
            영어 이름이 없는데 어떡하지?
          </button>
        )}
      </div>
    </StyledWrapper>
  );
}

export default EntryCardKo;

// function SubmitBtn() {
//   return (
//     <Button
//       variant="contained"
//       color="warning"
//       size="large"
//       component={Link}
//       to="/survey"
//       sx={{ margin: '10px' }}
//     >
//       <span style={{ fontSize: '20px' }}>영어 이름이 없는데 어떡하지?</span>
//     </Button>
//   );
// }

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  .qAndA.custom-input {
    height: 79px !important;
  }

  .qAndA .to-move {
    top: -12px;
    position: relative;
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
    color: black;
  }
`;

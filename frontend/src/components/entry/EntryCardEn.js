import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LinkButton from 'components/LinkButton';
import styled from 'styled-components';
import API from '../../config';

function EntryCardEn() {
  const [nameKo, setNameKo] = useState('');
  const [nameKoError, setNameKoError] = useState(false);
  const [nameKoErrorMsg, setNameKoErrorMsg] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const birthCheck = /^(19|20)\d{2}/;
  const [birthError, setBirthError] = useState(false);
  const [nameEn, setNameEn] = useState('');
  const nameEnCheck = /[^a-zA-Z]/;
  const [nameEnError, setNameEnError] = useState(false);
  const navigate = useNavigate();

  const linkToLoading = () => {
    navigate('/loading');
  };

  const saveToStorage = (localdata) => {
    localStorage.setItem('username', nameEn);
    localStorage.setItem('birth', birth);
    localStorage.setItem('gender', gender);
  };

  const sendData = async () => {
    const data = { name: nameKo, birth: birth, gender: gender };
    saveToStorage(data);
    linkToLoading();
  };

  const checkNameKo = async (nameKoTmp) => {
    axios
      .get(`${API.NAMECHECK}/${nameKoTmp}`)
      .then((res) => {
        const checkResult = JSON.parse(res.data);
        if (checkResult.check === false || nameKoTmp.length < 2) {
          setNameKoError(true);
          setNameKoErrorMsg(checkResult.msg);
        } else {
          setNameKo(nameKoTmp);
          setNameKoError(false);
          setNameKoErrorMsg('');
        }
      })
      .catch(() => {
        setNameKoError(true);
        setNameKoErrorMsg('다시 입력해주세요');
      });
  };

  return (
    <StyledWrapper>
      <div id="card">
        <Container
          id="titleBox"
          sx={{
            height: '80px'
          }}
        >
          <div id="title">
            <div id="title_a">THE UNITED STATES OF AMERICA</div>
            <div id="title_b">ARRIVAL CARD 입국카드</div>
          </div>
          <div id="title_explain">*은 필수항목입니다</div>
        </Container>
        <Container
          id="entryContentBox"
          sx={{ bgcolor: '#FCF8D2', height: '60vh' }}
        >
          <Box>
            <Grid
              container
              spacing={1.5}
              sx={{
                '--Grid-borderStyle': '1px solid #9B9A9A',
                borderLeft: 'var(--Grid-borderStyle)',
                borderTop: 'var(--Grid-borderStyle)',
                '& > div': {
                  borderRight: 'var(--Grid-borderStyle)',
                  borderBottom: 'var(--Grid-borderStyle)'
                }
              }}
            >
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-input">
                  <div className="question to-move">
                    <span className="questionA necessaryInput">*한글성명</span>
                    <span className="questionB necessaryInput">
                      Korean Name
                    </span>
                  </div>
                  <TextField
                    variant="standard"
                    className="answer"
                    placeholder="한글성명 ex) 홍길동"
                    inputProps={{
                      maxLength: 7,
                      style: { fontSize: 'clamp(14px, 1.6vw, 18px)' }
                    }}
                    color={nameKo ? 'checkedGreen' : 'warning'}
                    focused={nameKo ? true : false}
                    error={nameKoError}
                    helperText={nameKoError ? nameKoErrorMsg : null}
                    required
                    onChange={(e) => {
                      const nameKoTmp = e.target.value;
                      checkNameKo(nameKoTmp);
                    }}
                  />
                </div>
              </Grid>
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-input">
                  <div className="question to-move">
                    <span className="questionA necessaryInput">*영어이름</span>
                    <span className="questionB necessaryInput">
                      English Name
                    </span>
                  </div>
                  <TextField
                    variant="standard"
                    className="answer"
                    placeholder="영어 이름 ex) alex"
                    inputProps={{
                      style: { fontSize: 'clamp(14px, 1.6vw, 18px)' }
                    }}
                    color={nameEn ? 'checkedGreen' : 'warning'}
                    focused={nameEn ? true : false}
                    error={nameEnError}
                    helperText={nameEnError ? '영어이름을 입력해주세요' : null}
                    required
                    onChange={(e) => {
                      const nameEnTmp = e.target.value;
                      if (nameEnCheck.test(nameEnTmp)) {
                        setNameEnError(true);
                      } else {
                        setNameEn(
                          nameEnTmp.charAt(0).toUpperCase() +
                            nameEnTmp.slice(1).toLowerCase()
                        );
                        setNameEnError(false);
                      }
                    }}
                  />
                </div>
              </Grid>
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-input">
                  <div className="question to-move">
                    <span className="questionA necessaryInput">*생년</span>
                    <span className="questionB necessaryInput">Birth Year</span>
                  </div>
                  <TextField
                    variant="standard"
                    inputProps={{
                      maxLength: 4,
                      style: { fontSize: 'clamp(14px, 1.6vw, 18px)' }
                    }}
                    className="answer"
                    placeholder="태어난 해 ex) 1995"
                    color={birth ? 'checkedGreen' : 'warning'}
                    focused={birth ? true : false}
                    error={birthError}
                    helperText={
                      birthError
                        ? '1940 ~ 2021년 사이를 숫자로 입력해주세요'
                        : null
                    }
                    required
                    onChange={(e) => {
                      const birthTmp = e.target.value;
                      if (
                        !birthCheck.test(birthTmp) ||
                        birthTmp.length < 4 ||
                        Number(birthTmp) < 1940 ||
                        Number(birthTmp) > 2021
                      ) {
                        setBirthError(true);
                      } else {
                        setBirth(birthTmp);
                        setBirthError(false);
                      }
                    }}
                  />
                </div>
              </Grid>
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-not-input">
                  <div className="question to-move">
                    <span className="questionA necessaryInput">*성별</span>
                    <span className="questionB necessaryInput">Gender</span>
                  </div>
                  <FormControl className="answer">
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={gender}
                      onChange={(event) => {
                        setGender(event.target.value);
                      }}
                    >
                      <FormControlLabel
                        value="M"
                        control={
                          <Radio
                            sx={{
                              '&.Mui-checked': { '&': { color: 'green' } }
                            }}
                            style={{ marginLeft: '3px' }}
                          />
                        }
                        label={
                          <span
                            style={{
                              fontSize: '14px',
                              marginRight: '27px'
                            }}
                          >
                            Male
                          </span>
                        }
                      />
                      <FormControlLabel
                        value="F"
                        control={
                          <Radio
                            sx={{
                              '&.Mui-checked': { '&': { color: 'green' } }
                            }}
                            style={{ marginLeft: '3px' }}
                          />
                        }
                        label={
                          <span
                            style={{
                              fontSize: '14px',
                              marginRight: '27px'
                            }}
                          >
                            Female
                          </span>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Grid>
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-not-input">
                  <div className="question to-move">
                    <span className="questionA">여권번호</span>
                    <span className="questionB">Passport No.</span>
                  </div>
                  <div className="fixedAnswer">M15883357</div>
                </div>
              </Grid>
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-not-input">
                  <div className="question to-move">
                    <span className="questionA">출발지</span>
                    <span className="questionB">Last City</span>
                  </div>
                  <div className="fixedAnswer">Korea</div>
                </div>
              </Grid>
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-not-input">
                  <div className="question to-move">
                    <span className="questionA">국적</span>
                    <span className="questionB">Nationality</span>
                  </div>
                  <div className="fixedAnswer">Korea</div>
                </div>
              </Grid>
              <Grid {...{ xs: 6 }}>
                <div className="qAndA custom-not-input">
                  <div className="question to-move">
                    <span className="questionA">입국편명</span>
                    <span className="questionB">Flight No.</span>
                  </div>
                  <div className="fixedAnswer">AIR Name A108</div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div id="btn">
        <LinkButton
          id="nextBtn"
          onClick={sendData}
          content="내 영어 이름 리포트 보러 바로가기"
          to="/Loading"
          disabled={
            !Boolean(
              nameKo &&
                !nameKoError &&
                gender &&
                birth &&
                !birthError &&
                nameEn &&
                !nameEnError
            )
          }
          style={{ marginTop: '20px' }}
        />
      </div>
    </StyledWrapper>
  );
}

export default EntryCardEn;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  #card {
    width: 100%;
    box-shadow: 20px 40px 50px -30px rgba(0, 0, 0, 0.2);
  }
  #title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  #titleBox {
    background: linear-gradient(-135deg, transparent 15px, #fedbb9 0);
  }
  #title_a {
    font-size: clamp(13px, 2.2vw, 17px);
  }
  #title_b {
    font-family: 'SCDream7';
    font-size: clamp(20px, 3vw, 25px);
  }
  #title_explain {
    color: red;
    position: relative;
    font-size: 8px;
    bottom: 18px;
    text-align: right;
  }
  #entryContentBox {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 350px;
  }
  .qAndA {
    display: flex;
    flex-direction: column;
  }
  .qAndA.custom-input {
    height: 79px !important;
  }
  .qAndA .to-move {
    position: relative;
    top: -5px;
  }
  .answer {
    position: relative;
    left: 3px;
    width: 100%;
  }
  #btn {
    display: flex;
    justify-content: center;
  }
  .questionA {
    font-family: 'SCDream3';
    margin-right: 8px;
    font-size: clamp(12px, 1.3vw, 16px);
    color: rgba(150, 150, 150, 80);
  }
  .questionB {
    font-family: 'SCDream4';
    font-size: clamp(12px, 1.3vw, 16px);
    color: rgba(150, 150, 150, 80);
  }
  .necessaryInput {
    color: red;
  }
  .fixedAnswer {
    text-align: center;
    font-size: clamp(14px, 1.6vw, 18px);
    color: rgba(150, 150, 150, 80);
  }
`;

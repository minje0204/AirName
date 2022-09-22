import { Container, Box, Button, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LabelingResult from './LoadingResult';
import API from '../../config';
import { enToKoAttribute, koToEnAttribute } from './attributeDictionary';

export default function Labeling() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [attributeName, setAttributeName] = useState([]);
  const [attributePercentage, setAttributePercentage] = useState([]);
  const [result, setResult] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const getNameGame = async () => {
    setIsImgLoaded(false);
    await axios.get(`${API.LOADING}`).then((res) => {
      console.log(res);
      const data = JSON.parse(res.data);
      setName(data.name);
      setGender(data.gender);
      setAttributeName([
        enToKoAttribute[data.attribute_name[0]],
        enToKoAttribute[data.attribute_name[1]]
      ]);
      setAttributePercentage(data.attribute_percentage);
    });
  };

  useEffect(() => {
    if (name) {
      setIsImgLoaded(true);
    }
  }, [name]);

  // 렌더링 될 때, 데이터 요청
  useEffect(() => {
    getNameGame();
  }, [refresh]);

  const sendChoosedAttr = async (attr) => {
    const data = {
      name: name,
      gender: gender,
      attribute: attr
    };
    console.log(data, 'data');
    axios.put(`${API.LOADING}`, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <StyledWrapper>
      <Container className="explain">
        <Box className="explain">
          <Box id="title">이미지게임</Box>
          <Box className="question">
            다른 사람은 이 이름에 대해 어떻게 생각할까요?
          </Box>
          <Box className="question">아래 카드를 누르면 결과가 나와요.</Box>
        </Box>
        {!isImgLoaded ? (
          <>
            <Box sx={{ width: 300, height: 200 }} />
            <div id="progress-container">
              <CircularProgress />
            </div>
          </>
        ) : (
          <>
            <Box id="name" sx={{ margin: '10px' }}>
              {name}
            </Box>
            <Box>
              {result ? (
                <Container id="resultBox">
                  <Box>'{result}'을 선택했어요</Box>
                  <LabelingResult
                    result={result}
                    personalityZero={attributeName[0]}
                    personalityOne={attributeName[1]}
                    attributePercentage={attributePercentage}
                  />
                  <Button
                    variant="contained"
                    onClick={() => {
                      setRefresh(!refresh);
                      setResult('');
                    }}
                    color="secondary"
                    style={{
                      marginTop: '10px',
                      color: 'white'
                    }}
                  >
                    <span>다른 이름</span>
                  </Button>
                </Container>
              ) : (
                <Box id="choices">
                  <Button
                    variant="outlined"
                    className="choice"
                    color="primary"
                    onClick={() => {
                      setResult(attributeName[0]);
                      sendChoosedAttr(koToEnAttribute[attributeName[0]]);
                    }}
                  >
                    {attributeName[0]}
                  </Button>
                  <Button
                    variant="outlined"
                    className="choice"
                    color="warning"
                    onClick={() => {
                      setResult(attributeName[1]);
                      sendChoosedAttr(koToEnAttribute[attributeName[1]]);
                    }}
                  >
                    {attributeName[1]}
                  </Button>
                </Box>
              )}
            </Box>
          </>
        )}
      </Container>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @media (max-width: 410px) {
    font-size: 3vw;
    #choices {
      flex-direction: column;
    }
  }
  .explain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #title {
    font-family: SCDream7;
    font-size: 36px;
  }
  #progress-container {
    position: relative;
    top: -100px;
  }
  #name {
    background-color: var(--infoMain);
    padding: 20px 40px;
    font-family: SCDream7;
    font-size: clamp(1rem, 4vw, 2rem);
    display: flex;
    justify-content: center;
  }
  #choices {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  .choice {
    radius: 10px;
    padding: 15px 30px;
    background-color: var(--infoMain);
    font-family: SCDream7;
    font-size: clamp(0.7rem, 3vw, 1.5rem);
    margin: 10px;
  }
  #resultBox {
    background-color: #f9f7f4;
    padding: 20px 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

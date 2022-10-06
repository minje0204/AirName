import { Container, Box, Button, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LabelingResult from './LoadingResult';
import API from '../../config';
import { enToKoAttribute, koToEnAttribute } from './attributeDictionary';
import TTSBtn from 'components/TTSBtn';

export default function Labeling() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [attributeName, setAttributeName] = useState([]);
  const [attributePercentage, setAttributePercentage] = useState([]);
  const [result, setResult] = useState('');
  const [resultIdx, setResultIdx] = useState(0);
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
          <Box id="mainTitle">이미지게임</Box>
          <Box className="SubTitle">
            다른 사람은 이 이름에 대해 어떻게 생각할까요?
          </Box>
          <Box className="SubTitle">스피커 아이콘을 눌러 발음을 들어보고</Box>
          <Box className="SubTitle">
            더 가까워보이는 특성을 선택하면 결과가 나와요.
          </Box>
          <Box id="loadingExplain">
            발음과 답변을 분석 중입니다. 곧 이름을 추천해드릴게요.
          </Box>
        </Box>
        {!isImgLoaded ? (
          <>
            <Box sx={{ width: 300, height: 154 }} />
            <div id="progress-container">
              <CircularProgress />
            </div>
          </>
        ) : (
          <>
            <Box id="name" sx={{ margin: '10px' }}>
              {name}
              <TTSBtn
                username={name}
                type="rcmnd"
                iconSize="clamp(16px, 4vw, 32px)"
              />
            </Box>
            <Box>
              {result ? (
                <Container id="resultBox">
                  <Box>'{result}'을 선택했어요</Box>
                  <LabelingResult
                    resultIdx={resultIdx}
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
                      setResultIdx(0);
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
                      setResultIdx(1);
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
  #mainTitle {
    font-family: SCDream7;
    font-size: 36px;
  }
  .SubTitle {
    font-size: clamp(14px, 1.6vw, 17px);
  }
  #loadingExplain {
    color: gray;
    font-size: 12px;
  }
  #progress-container {
    position: relative;
    top: -100px;
  }
  #name {
    background-color: var(--infoMain);
    padding: 20px 40px;
    font-family: SCDream7;
    font-size: clamp(16px, 4vw, 32px);
    display: flex;
    justify-content: center;
  }
  #choices {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 160px;
    width: 400px;
    align-items: center;
  }
  .choice {
    radius: 10px;
    padding: 15px 30px;
    background-color: var(--infoMain);
    font-family: SCDream7;
    font-size: clamp(12px, 3vw, 24px);
    height: clamp(60px, 15vw, 120px);
    // width: clamp(60px, 15vw, 120px);
    margin: 10px;
  }
  #resultBox {
    background-color: #f9f7f4;
    padding: 20px 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 160px;
    justify-content: center;
  }
  }
`;

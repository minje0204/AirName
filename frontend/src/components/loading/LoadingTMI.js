import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function LoadingTMI() {
  const infos = [
    '1996년 6월, 한 스웨덴 여성은 아들을  Christopher나 Christoffer라고 부르지 않고 Christophpher라고 부르기 위한 9년 간의 싸움에서 승리했다.',
    '아이슬란드인들의 이름은 승인된 1712개의 남성 이름과 1853개의 여성 이름 중에서 선택되어야 한다.',
    '1922-2021년 사이에 태어난 Mary는 총 3,124,584명이다.',
    '1922-2021년 사이에 태어난 James는 총 4,663,035명이다.',
    '이름을 지을 때 한국에서 사용할 수 있는 글자는 2350자이다.',
    '이름을 지을 때 한국에서 사용할 수 있는 한자는 5300자이다.',
    '1993년부터 출생 신고 시 조부모, 부모, 형제자매와 같은 이름은 등록이 불가능하다.',
    '대한민국 국적자 중 가장 긴 이름의 글자 수는 17자이다.',
    '우리나라에 등록된 가장 긴 이름은 30자이다.',
    '1993년부터 성을 제외하고 5자 이내로 이름 글자 수를 제한했다.',
    '최근 한국에서 가장 인기있는 여성의 이름은 서연이다.',
    '최근 한국에서 가장 인기있는 남성의 이름은 민준이다.'
  ];
  const randomNum = function () {
    setNum(Math.floor(Math.random() * infos.length));
  };
  useEffect(() => {
    randomNum();
  }, []);
  const [num, setNum] = useState(0);
  return (
    <StyledWrapper>
      <Box className="explain">
        <Box id="mainTitle">
          TMI #{num < 9 ? 0 + String(num + 1) : String(num + 1)}
        </Box>
        <Box className="SubTitle">이름과 관련된 흥미로운 TMI입니다.</Box>
        <Box id="loadingExplain">
          발음과 답변을 분석 중입니다. 곧 이름을 추천해드릴게요.
        </Box>
      </Box>
      <Box
        id="ContentBox"
        sx={{
          bgcolor: '#F9F7F4',
          marginBottom: '10px',
          padding: '10px',
          minHeight: '160px'
        }}
      >
        <Box id="tmiContent">{infos[num]}</Box>

        <div id="anotherTMI">
          <Button
            variant="contained"
            onClick={() => {
              randomNum();
            }}
            color="secondary"
          >
            <span id="anotherTMIContent">다른 TMI</span>
          </Button>
        </div>
      </Box>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .explain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  #mainTitle {
    font-family: SCDream7;
    font-size: 36px;
  }
  .SubTitle {
    font-size: 16px;
  }
  #loadingExplain {
    color: gray;
    font-size: 12px;
  }
  #ContentBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #tmiContent {
    font-size: 18px;
    margin: 10px;
    display: flex;
    justify-content: center;
    margin: auto 0;
  }
  #anotherTMI {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #anotherTMIContent {
    color: white;
  }
`;

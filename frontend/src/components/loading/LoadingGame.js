import React, { Component } from 'react';
import { Box, Button } from '@mui/material';
import styled from 'styled-components';

class ReactionTimeTest extends Component {
  state = {
    screenState: 'waiting',
    message: '시작하기😎',
    screenColor: 'secondary',
    resultTime: []
  };

  timeout;
  startTime;
  endTime;

  onClick = () => {
    const { screenState, message, resultTime, screenColor } = this.state;
    if (screenState === 'waiting') {
      this.setState({
        screenState: 'ready',
        message: '잠시 기다리세요😉'
      });
      this.timeout = setTimeout(() => {
        this.setState({
          screenState: 'go',
          message: '지금 누르세요!🥰',
          screenColor: 'success'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (screenState === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        screenState: 'waiting',
        message: '너무 일찍 눌렀어요😢'
      });
    } else if (screenState === 'go') {
      this.endTime = new Date();
      this.setState((prev) => {
        return {
          screenState: 'waiting',
          message: '시작하기😎',
          screenColor: 'secondary',
          resultTime: [...prev.resultTime, this.endTime - this.startTime]
        };
      });
    }
  };

  renderAvg = () => {
    return this.state.resultTime.length === 0 ? null : (
      <div>
        평균시간:{' '}
        {(
          this.state.resultTime.reduce((a, c) => a + c) /
          this.state.resultTime.length
        ).toFixed(2)}
        ms
      </div>
    );
  };

  onClickReset = () => {
    this.setState({
      resultTime: []
    });
  };

  render() {
    return (
      <StyledWrapper>
        <Box className="explain">
          <Box id="mainTitle">반응속도 테스트</Box>
          <Box className="SubTitle">나의 평균 반응속도는?</Box>
          <Box className="SubTitle">초록색으로 바뀌면 클릭해주세요</Box>
          <Box id="loadingExplain">
            발음과 답변을 분석 중입니다. 곧 이름을 추천해드릴게요.
          </Box>
        </Box>
        <Box id="testBox">
          <span id="time">{this.renderAvg()}</span>
          <Button
            variant="contained"
            color={this.state.screenColor}
            id="screen"
            className={this.state.screenState}
            onClick={this.onClick}
            style={{
              marginTop: '10px',
              color: 'white',
              width: '180px'
            }}
          >
            <span>{this.state.message}</span>
          </Button>
        </Box>
      </StyledWrapper>
    );
  }
}

export default ReactionTimeTest;

const StyledWrapper = styled.div`
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
    font-size: 17px;
  }
  #loadingExplain {
    color: gray;
    font-size: 12px;
  }
  #testBox {
    background-color: #f9f7f4;
    padding: 20px 40px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #time {
    font-family: SCDream7;
  }
`;

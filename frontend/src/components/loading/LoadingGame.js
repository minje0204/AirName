import React, { Component } from 'react';
import { Box, Button } from '@mui/material';
import styled from 'styled-components';

class ReactionTimeTest extends Component {
  state = {
    screenState: 'waiting',
    message: 'μμνκΈ°π',
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
        message: 'μ μ κΈ°λ€λ¦¬μΈμπ'
      });
      this.timeout = setTimeout(() => {
        this.setState({
          screenState: 'go',
          message: 'μ§κΈ λλ₯΄μΈμ!π₯°',
          screenColor: 'success'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (screenState === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        screenState: 'waiting',
        message: 'λλ¬΄ μΌμ° λλ μ΄μπ’'
      });
    } else if (screenState === 'go') {
      this.endTime = new Date();
      this.setState((prev) => {
        return {
          screenState: 'waiting',
          message: 'μμνκΈ°π',
          screenColor: 'secondary',
          resultTime: [...prev.resultTime, this.endTime - this.startTime]
        };
      });
    }
  };

  renderAvg = () => {
    return this.state.resultTime.length === 0 ? null : (
      <div>
        νκ· μκ°:{' '}
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
          <Box id="mainTitle">λ°μμλ νμ€νΈ</Box>
          <Box className="SubTitle">λμ νκ·  λ°μμλλ?</Box>
          <Box className="SubTitle">μ΄λ‘μμΌλ‘ λ°λλ©΄ ν΄λ¦­ν΄μ£ΌμΈμ</Box>
          <Box id="loadingExplain">
            λ°μκ³Ό λ΅λ³μ λΆμ μ€μλλ€. κ³§ μ΄λ¦μ μΆμ²ν΄λλ¦΄κ²μ.
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

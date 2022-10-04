import styled from 'styled-components';
import AirplaneWindow from '../components/home/AirplaneWindow';
import StartBtn from '../components/home/StartBtn';
import ShareBtn from 'components/home/ShareBtn';

function Home() {
  return (
    <StyledWrapper>
      <div id="left-container">
        <AirplaneWindow />
      </div>
      <div id="right-container">
        <div>
          <img src="/logo.png" alt="logo" id="logo" />
        </div>
        <div id="button-container">
          <div>
            <StartBtn
              title="영어 이름 추천받기"
              subtitle="영어 이름이 없다면? 🙅‍♀️"
              to="/entry-ko"
            />
          </div>
          <div>
            <StartBtn
              title="내 이름 레포트 보기"
              subtitle="이미 영어 이름이 있어요 ! 🙆‍♂️"
              to="/entry-en"
            />
          </div>
          <ShareBtn />
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`

  @media (min-width: 650px) {
    min-width: 630px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: space-evenly;
    #left-container {
      display: none;
    }
  }
  #logo {
    width: min(80vw, 280px);
  }
  StartBtn {
    width: min(80vw, 280px);
  }
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;

  #right-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
  }

  #button-container {
    height: 250px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

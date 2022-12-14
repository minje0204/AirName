import styled from 'styled-components';
import AirplaneWindow from '../components/home/AirplaneWindow';
import StartBtn from '../components/home/StartBtn';
import ShareBtn from 'components/home/ShareBtn';
import LinkButton from '../components/LinkButton';

function Home() {
  return (
    <StyledWrapper>
      <div id="left-container">
        <AirplaneWindow />
      </div>
      <div id="right-container">
        <div id="home-img-container">
          {/* <img src="/logo2.svg" alt="logo" id="logo" /> */}
          AIR NAME
        </div>
        <div>
          <div>
            <StartBtn
              title="영어 이름 추천받기"
              subtitle="영어 이름이 없다면? 🙅‍♀️"
              to="/entry-ko"
            />
          </div>
          <div id="start-btn-shadow">
            <StartBtn
              title="내 이름 레포트 보기"
              subtitle="이미 영어 이름이 있어요 ! 🙆‍♂️"
              to="/entry-en"
            />
          </div>
          <div>
            <ShareBtn
              to=""
              content="카카오톡으로 공유"
              h="50px"
              w="300px"
              fs="20px"
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.7);
  // background-color: rgba(0, 0, 0, 0.8);
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.65));
  font-size: 13px;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-evenly;
    #left-container {
      display: none;
    }
  }
  #logo {
    width: min(80vw, 280px);
    margin-bottom: 20px;
  }
  StartBtn {
    width: min(80vw, 280px);
  }
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  #right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 350px;
  }

  #home-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    font-weight: 700;
    font-style: italic;
    color: white;
    margin-bottom: 20px;
    font-family: 'SCDream7';
  }

  #button-container {
    height: 250px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.7);
  }
`;

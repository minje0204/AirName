import React from "react";
import AirplaneWindow from "./../components/home/AirplaneWindow.js";
import StartBtn from "./../components/home/StartBtn.js";

function Home() {
  return (
    <div>
      <div>Home</div>
      <AirplaneWindow />
      <StartBtn
        title={"영어 이름 추천받기"}
        subtitle={"영어 이름이 없다면? 🙅‍♀️"}
        to={"/entry"}
      />
      <br />
      <StartBtn
        title={"내 이름 레포트 보기"}
        subtitle={"이미 영어 이름이 있어요 ! 🙆‍♂️ "}
        to={"/finReport"}
      />
    </div>
  );
}

export default Home;

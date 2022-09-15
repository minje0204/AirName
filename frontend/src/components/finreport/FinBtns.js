import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

// 카카오톡 공유하기 버튼
function FinBtns() {
  useEffect(() => {
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "AIR NAME",
        description: "#이름 #영어이름 #알잘딱깔센",
        imageUrl:
          "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl:
            "https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/",
          webUrl:
            "https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl:
              "https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/",
            webUrl:
              "https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/",
          },
        },
      ],
    });
  });
  return (
    <StyledWrapper>
      <FinBtnsWrapper>
        <Button variant="contained">티켓 이미지로 저장</Button>
      </FinBtnsWrapper>
      <FinBtnsWrapper>
      <Button variant="contained" className="Kakao" id="kakao-link-btn">
        리포트 카카오톡 공유하기</Button>
      </FinBtnsWrapper>
    </StyledWrapper>
  );
}

export default FinBtns;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
  margin: 20px;
`;

const FinBtnsWrapper = styled.div`
  margin:20px;
`

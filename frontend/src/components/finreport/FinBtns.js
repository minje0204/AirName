import React, { useEffect } from 'react'

// 카카오톡 공유하기 버튼 
function FinBtns() {
  useEffect(() => {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: 'AIR NAME',
        description: '#이름 #영어이름 #알잘딱깔센',
        imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/',
          webUrl: 'https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/'
        }
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/',
            webUrl: 'https://www.notion.so/AirName-32a98977827a47b6b1c6a560aa9bd75f/'
          }
        }
      ]
    });
  })
  return (
    <div>
        <button>이미지 저장</button>
        <button className="Kakao" id="kakao-link-btn" >카카오톡 공유하기</button>
    </div>
  );
}

export default FinBtns

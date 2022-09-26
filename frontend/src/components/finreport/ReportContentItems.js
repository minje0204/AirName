import React from 'react';
import styled from 'styled-components';


function ReportContentItems({
  username,
  maleState,
  femaleState,
  maleMeaning,
  femaleMeaning,
  parseKoHome,
  parseEnHome,
  parseFeKoHome,
  parseFeEnHome
}) 

{
  return (
    <div>
      {
        username.length > 0 
        ? 
        <ContentBox><h3>💕 AIR NAME에서 추천된 영어이름은 {username}입니다!</h3></ContentBox>
        : null
      }
      {
        maleState.length > 0 && femaleState.length > 0
        ? 
        <ContentBox><h3>💌 중성적인 이름, {username}!</h3> 
        이 이름은 남녀 성별 모두 자주 사용되는 이름으로, 중성적인 느낌을 가지고 있어요! 모든 성별에서 쓰일 때 이름의 정보를 모두 보여드릴게요 ! </ContentBox>
        : null
      }
      {
        maleState.length > 0 
        ? 
        <ContentBox><h3>🏡 {username}의 명예 고향은 {parseEnHome}!</h3>
        {username}이라는 이름은 {parseKoHome}에서 가장 많이 사용되고 있습니다 🏅  그중에서 남성들에게 인기가 있는 이름이에요!</ContentBox>
        :null
      }
      {
        femaleState.length > 0 
        ? 
        <ContentBox><h3>🌎 {username}의 명예 고향은 {parseFeEnHome}!</h3>
        {username}이라는 이름은 {parseFeKoHome}에서 가장 많이 사용되고 있습니다 🏆  그중에서 여성들에게 인기가 있는 이름이에요!</ContentBox>
        :null
      }
      {
        maleMeaning.length > 0 
        ? 
        <ContentBox><h3>⚡ {username}의 이름 뜻은 {maleMeaning}😎!</h3>
        {username}은 {maleMeaning}이라는 뜻을 가지고 있어요 !</ContentBox>
        :null
      }
      {
        femaleMeaning.length > 0 
        ? 
        <ContentBox><h3>✨ {username}의 이름 뜻은 {femaleMeaning}🥰!</h3>
        {username}은 {femaleMeaning}이라는 뜻을 가지고 있어요 !</ContentBox>
        :null
      }
    </div>
  );
}

export default ReportContentItems;

const ContentBox = styled.div`
  margin: 10px;
  padding: 30px;
  background-color: #f9f7f4;
  color: black;
  border-radius: 10px;
  width: 650px;
}
@media (max-width: 650px) {
  width: 250px;
  font-size: 12px;
  padding-top: 15px;
`;

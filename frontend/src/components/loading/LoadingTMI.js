import { Box } from '@mui/material';
import styled from 'styled-components';

export default function LoadingTMI() {
  const infos = [
    '1996년 6월, 한 스웨덴 여성은 아들을  Christopher나 Christoffer라고 부르지 않고 Christophpher라고 부르기 위한 9년 간의 싸움에서 승리했다.',
    '아이슬란드인들의 이름은 승인된 1712개의 남성 이름과 1853개의 여성 이름 중에서 선택되어야 한다.'
  ];
  const num = Math.floor(Math.random() * infos.length);
  return (
    <StyledWrapper>
      <Box sx={{ bgcolor: '#F9F7F4', marginBottom: '10px', padding: '10px' }}>
        <Box id="title" sx={{ margin: '10px' }}>
          TMI #{num + 1}
        </Box>
        <Box id="content" sx={{ margin: '10px' }}>
          {infos[num]}
        </Box>
      </Box>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  #title {
    font-family: SCDream7;
    font-size: 36px;
  }
`;

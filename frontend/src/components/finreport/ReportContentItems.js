import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

function ReportContentItems(props) {
  return (
    <div>
      <ContentBoxWrapper>
        <Box
            sx={{
              width: 800,
              height: 300,
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
      </ContentBoxWrapper>
      <ContentBoxWrapper>
        <Box
          sx={{
            width: 800,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </ContentBoxWrapper>
    </div>
  );
}

export default ReportContentItems;


const ContentBoxWrapper = styled.div`
  margin:10px;
`;
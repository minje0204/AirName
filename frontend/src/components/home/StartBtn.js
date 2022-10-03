import * as React from 'react';
import LinkButton from 'components/LinkButton';
import { Box } from '@mui/material';

function StartBtn({ title, subtitle, to }) {
  return (
    <div>
      <Box sx={{ marginBottom: 0.5 }}>{subtitle}</Box>
      <LinkButton content={title} to={to} h="50px" w="300px" fs="20px" />
    </div>
  );
}

export default StartBtn;

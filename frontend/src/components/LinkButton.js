// import Link from 'next/link';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

const LinkButton = ({ content, to, h, w, fs, url, ...props }) => {
  return (
    <BtnStyle>
      <Button
        variant="contained"
        sx={{
          bgcolor: 'var(--buttonColor)',
          height: `${h ? h : '44px'}`,
          width: `${w}`
        }}
        component={Link}
        to={to}
        {...props}
      >
        {url !== undefined ? (
          <img
            src={url}
            style={{
              width: '20px',
              height: '20px',
              marginRight: '5px',
              position: 'relative',
              top: '1px'
            }}
          ></img>
        ) : null}
        <span id="content" style={{ fontSize: `${fs ? fs : '14px'}` }}>
          {content}
        </span>
      </Button>
    </BtnStyle>
  );
};

export default LinkButton;

const BtnStyle = styled.div`
  border-radius: 20px;
  #content {
    font-family: 'SCDream5';
    color: white;
  }
`;

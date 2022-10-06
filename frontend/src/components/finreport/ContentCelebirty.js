import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function ContentCelebirty({ maleCelebrity, femaleCelebrity }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="fin-content">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {/* Tabs */}
          {typeof maleCelebrity === 'object' &&
          Object.keys(maleCelebrity).length > 0 ? (
            <Tab label="🙍‍♂️ 남자 유명인" {...a11yProps(0)} />
          ) : (
            <Tab label="🙍‍♂️ 남자 유명인" {...a11yProps(0)}  />
          )}

          {typeof femaleCelebrity === 'object' &&
          Object.keys(femaleCelebrity).length > 0 ? (
            <Tab label="🙍‍♀️ 여자 유명인" {...a11yProps(1)} />
          ) : (
            <Tab label="🙍‍♀️ 여자 유명인" {...a11yProps(1)}  />
          )}
        </Tabs>

        <TabPanel value={value} index={0}>
          {/* 남자 유명인 */}
          {typeof maleCelebrity === 'object' &&
          Object.keys(maleCelebrity).length > 0 ? (
            <>
              <h3>같은 이름을 가진 남자 유명인!</h3>
              {Object.entries(maleCelebrity).map(([k, v]) => (
                <div key={k}>
                  <EachCelebContainer>
                    <CelebCard>
                      <div id="celeb-img-container">
                        <img id="celeb-img" src={v[1]}></img>
                      </div>
                      <div id="celeb-info-container">
                        <span id="celeb-head">{k}</span>

                        <br />
                        <span id="celeb-body">{v[0]}</span>
                      </div>
                    </CelebCard>
                  </EachCelebContainer>
                </div>
              ))}
            </>
          ) : <TabPanel value={value} index={0}>남성 유명인이 없습니다😥</TabPanel>}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {/* 여자 유명인
          {typeof femaleCelebrity === 'object' &&
          Object.keys(femaleCelebrity).length > 0 ? (
            <>
              <h3> 같은 이름을 가진 여자 유명인!</h3>
              {Object.entries(femaleCelebrity).map(([k, v]) => (
                <div key={k}>
                  {k} : {v}
                  <br />
                </div>
              ))}
            </>
          ) : null} */}

          {/* 남자 유명인 */}
          {typeof femaleCelebrity === 'object' &&
          Object.keys(femaleCelebrity).length > 0 ? (
            <>
              <h3>같은 이름을 가진 남자 유명인!</h3>
              {Object.entries(femaleCelebrity).map(([k, v]) => (
                <div key={k}>
                  <EachCelebContainer>
                    <CelebCard>
                      <div id="celeb-img-container">
                        <img id="celeb-img" src={v[1]}></img>
                      </div>
                      <div id="celeb-info-container">
                        <span id="celeb-head">{k}</span>
                        <br />
                        <span id="celeb-body">{v[0]}</span>
                      </div>
                    </CelebCard>
                  </EachCelebContainer>
                </div>
              ))}
            </>
          ) : <TabPanel value={value} index={1}> 여성 유명인이 없습니다😥</TabPanel>}
        </TabPanel>
      </div>
    </>
  );
}

export default ContentCelebirty;

const EachCelebContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;

  #celeb-img-container {
    width: 200px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 30px;
  }
  #celeb-img {
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
  #celeb-info-container {
    width: 50%;
  }
  #celeb-head {
    font-size: 30px;
    font-family: 'SCDream7';
  }
  #celeb-body {
  }
  @media (max-width: 650px) {
    #celeb-img {
      width: 100px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    #celeb-img-container {
      height: 100px;
      width: 100px;
      overflow: hidden;
      border-radius: 10em;
    }
    #celeb-head {
      font-size: 15px;
      font-family: 'SCDream7';
      margin-right: 5px;
    }
  }
`;

const CelebCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

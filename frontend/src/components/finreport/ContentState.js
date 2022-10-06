import { useEffect, useState } from 'react';

//mui
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';

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

function ContentState({
  maleState,
  femaleState,
  username,
  parseKoHome,
  parseEnHome,
  statesDesNImg,
  parseFeKoHome,
  parseFeEnHome
}) {
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="fin-content">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {maleState.length > 0 ? (
          <Tab label="🏡🙍‍♂️ 남성 명예고향" {...a11yProps(0)} />
        ) : (
          <Tab label="🏡🙍‍♂️ 남성 명예고향" {...a11yProps(0)}  />
        )}

        {femaleState.length > 0 ? (
          <Tab label="🏡🙍‍♀️ 여성 명예고향" {...a11yProps(1)} />
        ) : (
          <Tab label="🏡🙍‍♀️ 여성 명예고향" {...a11yProps(1)}  />
        )}
      </Tabs>

      {/* 남성 주 */}
      {maleState.length > 0 ? (
        <TabPanel id="tab-content" value={value} index={0}>
          <h3>
            남성{' '}
            <span className="tooltip">
              명예 고향
              <IconButton className="help-icon">
                <HelpIcon color="primary" />
              </IconButton>
              <span className="tooltip-text">{`미국 50개의 주에서 "${username}"가 제일 많이 쓰인곳이에요`}</span>
            </span>
            은 {parseEnHome}!
          </h3>
          {username}은 남성의 이름일 때, 통계적으로 미국의
          <a
            href={`https://ko.wikipedia.org/wiki/${parseKoHome}주`}
            target="_self"
            className="meaning-dict-link"
          >
            {parseKoHome}주
          </a>
          에서 가장 많이 사용되고 있어요!{' '}
          {maleState ? (
            <>
              <strong>{statesDesNImg[maleState][0]}</strong>는
              <span id="state-desc">{statesDesNImg[maleState][1]}</span>입니다.
            </>
          ) : (
            <div></div>
          )}
          <br />
          {parseKoHome}에 대한 자세한 정보가 궁금하다면 파란색 글씨를
          클릭해보세요! 클릭시, {parseKoHome}주의 위키피디아 링크로 연결됩니다!
        </TabPanel>
      ) : <TabPanel value={value} index={0}>남성 명예고향이 없습니다😥</TabPanel>}

      {/* 여성 주 */}
      {femaleState.length > 0 ? (
        <TabPanel value={value} index={1}>
          <h3>
            여성{' '}
            <span className="tooltip">
              명예 고향
              <IconButton className="help-icon">
                <HelpIcon color="primary" />
              </IconButton>
              <span className="tooltip-text">{`미국 50개의 주에서 "${username}"가 제일 많이 쓰인곳이에요`}</span>
            </span>
            은 {parseFeEnHome}!
          </h3>
          {username}은 여성의 이름일 때, 통계적으로 미국의
          <a
            href={`https://ko.wikipedia.org/wiki/${parseFeKoHome}주`}
            target="_self"
            className="meaning-dict-link"
          >
            {parseFeKoHome}주
          </a>
          에서 가장 많이 사용되고 있어요!
          <br />
          <br />
          {parseFeKoHome}에 대한 더 많은 정보가 궁금하다면 파란색 글씨를
          클릭해보세요! 클릭시, {parseFeKoHome}주의 위키피디아 링크로
          연결됩니다!
        </TabPanel>
      ) : <TabPanel value={value} index={1}> 여성 명예고향이 없습니다😥</TabPanel>}
    </div>
  );
}

export default ContentState;

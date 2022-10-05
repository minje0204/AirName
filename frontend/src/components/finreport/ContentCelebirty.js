import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
            <Tab label="🙍‍♂️ 남자 유명인" {...a11yProps(0)} disabled />
          )}

          {typeof femaleCelebrity === 'object' &&
          Object.keys(femaleCelebrity).length > 0 ? (
            <Tab label="🙍‍♀️ 여자 유명인" {...a11yProps(1)} />
          ) : (
            <Tab label="🙍‍♀️ 여자 유명인" {...a11yProps(1)} disabled />
          )}
        </Tabs>

        <TabPanel value={value} index={0}>
          {/* 남자 유명인 */}
          {typeof maleCelebrity === 'object' &&
          Object.keys(maleCelebrity).length > 0 ? (
            <>
              <h3>🙍같은 이름을 가진 남자 유명인!</h3>
              {Object.entries(maleCelebrity).map(([k, v]) => (
                <div key={k}>
                  {k} : {v} <br />
                </div>
              ))}
            </>
          ) : null}
        </TabPanel>

        <TabPanel value={value} index={1}>
          {/* 여자 유명인 */}
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
          ) : null}
        </TabPanel>
      </div>
    </>
  );
}

export default ContentCelebirty;

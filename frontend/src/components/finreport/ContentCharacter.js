import * as React from 'react';

//mui
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

function ContentCharacter({ username, maleCharacter, femaleCharacter }) {
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

          {typeof maleCharacter === 'object' &&
          Object.keys(maleCharacter).length > 0 ? (
            <Tab label="πββοΈ λ¨μ μΊλ¦­ν°" {...a11yProps(0)} />
          ) : (
            <Tab label="πββοΈ λ¨μ μΊλ¦­ν°" {...a11yProps(0)} disabled />
          )}

          {typeof femaleCharacter === 'object' &&
          Object.keys(femaleCharacter).length > 0 ? (
            <Tab label="πββοΈ μ¬μ μΊλ¦­ν°" {...a11yProps(1)} />
          ) : (
            <Tab label="πββοΈ μ¬μ μΊλ¦­ν°" {...a11yProps(1)} disabled />
          )}
        </Tabs>

        {/* TabPanel */}

        {typeof maleCharacter === 'object' &&
        Object.keys(maleCharacter).length > 0 ? (
          <TabPanel value={value} index={0}>
            <h3>κ°μ μ΄λ¦μ κ°μ§ λ¨μ μΊλ¦­ν°</h3>
            {Object.entries(maleCharacter).map(([k, v]) => (
              <div key={k}>
                <strong>{k}</strong><br/>{v}
              </div>
            ))}
          </TabPanel>
        ) : (
          <TabPanel value={value} index={0}>λ¨μ± μΊλ¦­ν°κ° μμ΅λλ€π₯</TabPanel>
        )}

        {/* μ¬μ μΊλ¦­ν° */}
        {typeof femaleCharacter === 'object' &&
        Object.keys(femaleCharacter).length > 0 ? (
          <TabPanel value={value} index={1}>
            <>
              <h3>κ°μ μ΄λ¦μ κ°μ§ μ¬μ μΊλ¦­ν°</h3>
              {Object.entries(femaleCharacter).map(([k, v]) => (
                <div key={k}>
                  <strong>{k}</strong><br/>{v}
                  <br />
                </div>
              ))}
            </>
          </TabPanel>
        ) : <TabPanel value={value} index={1}> μ¬μ± μΊλ¦­ν°κ° μμ΅λλ€π₯</TabPanel>}
      </div>
    </>
  );
}

export default ContentCharacter;

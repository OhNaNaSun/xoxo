import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from 'styled-components';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const StyledTab = styled(Tab)`
  button {
    align-items: flex-end;
  }
`;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({ tabContents }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', minHeight: 600 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <StyledTab label="Github" {...a11yProps(0)} />
        <StyledTab label="Youtube" {...a11yProps(1)} />
        <StyledTab label="Instagram" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {tabContents[0]}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabContents[1]}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

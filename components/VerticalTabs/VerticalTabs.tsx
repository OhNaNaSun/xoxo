import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';

interface VerticalTabsProps {
  currentTabKey: number;
  tabPanelContent: ReactNode;
}
function TabPanel(props: TabPanelProps) {
  const { children } = props;

  return (
    <div role="tabpanel" style={{ flexGrow: '1' }}>
      <Container>
        <Box>{children}</Box>
      </Container>
    </div>
  );
}
export default function VerticalTabs({ currentTabKey, tabPanelContent }: VerticalTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(currentTabKey);
  }, [currentTabKey]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        minHeight: 600,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        onChange={handleChange}
        value={value}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          display: 'flex',
        }}
      >
        <Tab
          sx={{ alignItems: 'end' }}
          label={
            <Link href="/profile/gh" scroll={false}>
              <a>GITHUB</a>
            </Link>
          }
        />
        <Tab
          sx={{ alignItems: 'end' }}
          label={
            <Link href="/profile/yt" scroll={false}>
              <a>YOUBUTE</a>
            </Link>
          }
        />
        <Tab
          sx={{ alignItems: 'end' }}
          label={
            <Link href="/profile/ig" scroll={false}>
              <a>Instagram</a>
            </Link>
          }
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {tabPanelContent}
      </TabPanel>
    </Box>
  );
}

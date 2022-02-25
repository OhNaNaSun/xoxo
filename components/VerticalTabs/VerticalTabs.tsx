import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
interface VerticalTabsProps {
  currentTabKey: number;
  tabPanelContent: ReactNode;
}
function TabPanel(props: TabPanelProps) {
  const { children } = props;

  return (
    <div role="tabpanel" style={{ flexGrow: '1' }}>
      <Box>{children}</Box>
    </div>
  );
}
export default function VerticalTabs({ currentTabKey, tabPanelContent }: VerticalTabsProps) {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(currentTabKey);
  }, [currentTabKey]);
  return (
    <Box
      sx={{
        gap: '10px',
        flexGrow: 1,
        display: 'flex',
        minHeight: 600,
        width: '100%',
        flexDirection: !matches ? 'column' : 'row',
      }}
    >
      <Tabs
        orientation={`${!matches ? 'horizontal' : 'vertical'}`}
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

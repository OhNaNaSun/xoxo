import Head from 'next/head';
import Box from '@mui/material/Box';
import Layout from '../components/layout';
import { ReactNode } from 'react';
import VerticalTabs from '../components/VerticalTabs/VerticalTabs';
import dynamic from 'next/dynamic';
const MusicPlayer = dynamic(
  () => {
    return import('../components/MusicPlayer/MusicPlayer');
  },
  { ssr: false }
);

interface ProfileProps {
  currentTabKey: number;
  tabPanelContent: ReactNode;
}
export default function Profile({ currentTabKey, tabPanelContent }: ProfileProps) {
  return (
    <Layout>
      {/* <MusicPlayer /> */}
      <Head>
        <title>nanasun</title>
      </Head>
      <h1>About Me - NaNa</h1>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          minHeight: 600,
        }}
      >
        <VerticalTabs tabPanelContent={tabPanelContent} currentTabKey={currentTabKey} />
      </Box>
    </Layout>
  );
}

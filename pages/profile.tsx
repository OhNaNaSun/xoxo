import Head from 'next/head';
import Layout from '../components/layout';
import VerticalTabs from '../components/VerticalTabs/VerticalTabs';
import YoububeTab from '../components/YoutubeTab/YoutubeTab';
import GithubTab from '../components/GithubTab/GithubTab';
import InstagramTab from '../components/InstagramTab/InstagramTab';
import dynamic from 'next/dynamic';
const MusicPlayer = dynamic(
  () => {
    return import('../components/MusicPlayer/MusicPlayer');
  },
  { ssr: false }
);

export default function Profile() {
  return (
    <Layout>
      <MusicPlayer />
      <Head>
        <title>nanasun</title>
      </Head>
      <h1>About Me - NaNa</h1>
      <VerticalTabs tabContents={[<GithubTab key="0" />, <YoububeTab key="1" />, <InstagramTab key="2" />]} />
    </Layout>
  );
}

import Head from 'next/head';
import Layout from '../components/layout';
import VerticalTabs from '../components/VerticalTabs/VerticalTabs';
import YoububeTab from '../components/YoutubeTab/YoutubeTab';
import GithubTab from '../components/GithubTab/GithubTab';
import InstagramTab from '../components/InstagramTab/InstagramTab';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['profile'])),
      // Will be passed to the page component as props
    },
  };
}
const MusicPlayer = dynamic(
  () => {
    return import('../components/MusicPlayer/MusicPlayer');
  },
  { ssr: false }
);

export default function Profile() {
  const { t } = useTranslation('profile');
  return (
    <Layout>
      <MusicPlayer />
      <Head>
        <title>nanasun</title>
      </Head>
      <h1>{t('title')} - NaNa</h1>
      <VerticalTabs tabContents={[<GithubTab key="0" />, <YoububeTab key="1" />, <InstagramTab key="2" />]} />
    </Layout>
  );
}

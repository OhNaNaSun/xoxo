import { useRouter } from 'next/router';
import GithubTab from '../../components/GithubTab/GithubTab';
import InstagramTab from '../../components/InstagramTab/InstagramTab';
import Profile from '../../components/ProfilePageLayout';
import YoutubeTab from '../../components/YoutubeTab/YoutubeTab';
const pageMap = {
  gh: {
    tabIndex: 0,
    tabPanel: <GithubTab />,
  },
  yt: {
    tabIndex: 1,
    tabPanel: <YoutubeTab />,
  },
  ig: {
    tabIndex: 2,
    tabPanel: <InstagramTab />,
  },
};
export default function Youtube() {
  const { query } = useRouter();
  const pageid = (query.pageid || 'gh') as string;
  const currentTab = pageMap[pageid];
  return <Profile currentTabKey={currentTab.tabIndex} tabPanelContent={currentTab.tabPanel} />;
}

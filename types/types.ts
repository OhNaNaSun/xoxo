export interface AllPostsDataType {
  id: string;
  date: string;
  title: string;
  contentHtml?: string;
  read?: string;
}

export type YoutubeDataType = {
  data: {
    position: string;
    thumbnails: { high: { url: string } };
    channelId: string;
    description: string;
    publishedAt: string;
    title: string;
    resourceId: { videoId: string };
  }[];
  message?: string;
};
export type GithubDataType = {
  data: {
    id: string;
    html_url: string;
    pushed_at: string;
    full_name: string;
    topics: string[];
    description: string;
  }[];
  message: string;
};

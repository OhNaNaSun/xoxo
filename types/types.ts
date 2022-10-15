export interface AllPostsDataType {
  id: string;
  date: string;
  title: string;
  contentHtml?: string;
  read?: string;
}
export type YoutubeItemType = {
  position: string;
  thumbnails?: { high: { url: string } };
  channelId?: string;
  description?: string;
  publishedAt?: string;
  title?: string;
  resourceId?: { videoId: string };
}[];

export type YoutubeDataType = {
  data: YoutubeItemType;
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

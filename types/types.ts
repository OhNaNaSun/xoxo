export interface AllPostsDataType {
  id: string;
  date: string;
  title: string;
  contentHtml?: string;
}

export type YoutubeDataType = {
  position: string;
  thumbnails: { high: { url: string } };
  channelId: string;
  description: string;
  publishedAt: string;
  title: string;
  resourceId: { videoId: string };
}[];

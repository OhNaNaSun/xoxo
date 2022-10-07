// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { withErrorHandler } from '../../utils/withErrorHandler';
export default async function fetchYtData(_: NextApiRequest, res: NextApiResponse) {
  const URL =
    'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PL3NGRQjfpiMNBKxKq-O8WcM0FLVO4GYP3&key=AIzaSyD2eP8D5vGdzoWKJX8CwpR5gOKUhVsnimk';
  // 'https://graph.instagram.com/v12.0/4754435231330979/media?fields=media_url&access_token=IGQVJYdTlJQjFKcUpIYWc5c1pOa3l2aXpaSkI4SXZAnY2hpdS00VC0wQlk1RkdOajhaNGhmc1hOaHdDS2FsYjlsdWY5RmI1SVFOazV2NkdHY3FzTEZAuUThJYzVnWWJicmVkY0F5bkl6elM0eUhfcjFNOAZDZD';
  const { data, message } = await withErrorHandler(URL, _, res);
  if (data) {
    const videoList = data.items.slice(0, 5).map((i) => i.snippet);
    res.json({ data: videoList });
  } else {
    res.json({ message });
  }
}

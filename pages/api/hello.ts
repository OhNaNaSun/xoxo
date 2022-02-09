// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export default async function (_: NextApiRequest, res: NextApiResponse) {
  // const URL = 'https://api.github.com/users/OhNaNaSun/repos';
  const URL =
    'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PL3NGRQjfpiMNBKxKq-O8WcM0FLVO4GYP3&key=AIzaSyD2eP8D5vGdzoWKJX8CwpR5gOKUhVsnimk';
  // 'https://graph.instagram.com/v12.0/4754435231330979/media?fields=media_url&access_token=IGQVJYdTlJQjFKcUpIYWc5c1pOa3l2aXpaSkI4SXZAnY2hpdS00VC0wQlk1RkdOajhaNGhmc1hOaHdDS2FsYjlsdWY5RmI1SVFOazV2NkdHY3FzTEZAuUThJYzVnWWJicmVkY0F5bkl6elM0eUhfcjFNOAZDZD';
  const response = await axios.get(URL);
  console.log(response);
  // const data = response.data.sort(
  //   (a: { pushed_at: string }, b: { pushed_at: string }) =>
  //     new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
  // );
  res.status(200).json(response.data);
}

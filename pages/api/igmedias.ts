// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export default async function (_: NextApiRequest, res: NextApiResponse) {
  const URL =
    'https://graph.instagram.com/v12.0/4754435231330979/media?fields=media_url&access_token=IGQVJYdTlJQjFKcUpIYWc5c1pOa3l2aXpaSkI4SXZAnY2hpdS00VC0wQlk1RkdOajhaNGhmc1hOaHdDS2FsYjlsdWY5RmI1SVFOazV2NkdHY3FzTEZAuUThJYzVnWWJicmVkY0F5bkl6elM0eUhfcjFNOAZDZD';
  const response = await axios.get(URL);
  res.status(200).json(response.data);
}

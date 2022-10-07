// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { withErrorHandler } from '../../utils/withErrorHandler';
export default async function fetchGhData(_: NextApiRequest, res: NextApiResponse) {
  const URL = 'https://api.github.com/users/OhNaNaSun/repos';
  const data = await withErrorHandler(URL, _, res);
  res.send(data);
}

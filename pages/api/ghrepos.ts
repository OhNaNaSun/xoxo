// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export default async function (_: NextApiRequest, res: NextApiResponse) {
  const URL = 'https://api.github.com/users/OhNaNaSun/repos';
  const response = await axios.get(URL);
  res.status(200).json(response.data);
}

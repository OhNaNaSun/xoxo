import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
export const withErrorHandler = async function (url: string, _: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(url, {
      timeout: 4000,
    });
    res.status(200);
    return { data: response.data };
  } catch (error) {
    return { message: 'Failed to load data' };
  }
};

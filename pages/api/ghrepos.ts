// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { withErrorHandler } from '../../utils/withErrorHandler';
export default async function fetchGhData(_: NextApiRequest, res: NextApiResponse) {
  const URL = 'https://api.github.com/users/OhNaNaSun/repos';
  const { data, message } = await withErrorHandler(URL, _, res);
  if (data) {
    const repoList =
      data?.sort(
        (a: { pushed_at: string }, b: { pushed_at: string }) =>
          new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
      ) || [];
    res.send({ data: repoList });
  } else {
    res.send({ message });
  }
}

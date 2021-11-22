/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  res.status(200).json({ name: 'John Doe' });
}

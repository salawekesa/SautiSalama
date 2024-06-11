import { NextApiRequest, NextApiResponse } from 'next';

const providers = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Placeholder for providers' });
};

export default providers;

import type { NextApiRequest, NextApiResponse } from 'next';
import mixpanel from '../../utils/mixpanel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { event, userId, properties } = req.body;

    mixpanel.track(event, {
      user_id: userId,
      ...properties,
    });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}

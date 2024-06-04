import { NextApiRequest, NextApiResponse } from 'next';
import { getSuppliers, addSupplier } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const suppliers = await getSuppliers();
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).json({ message: 'Unable to fetch suppliers' });
    }
  } else if (req.method === 'POST') {
    try {
      const result = await addSupplier(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Unable to add supplier' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

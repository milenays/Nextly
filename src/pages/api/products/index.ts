import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('next-app');
      const products = await db.collection('products').find({}).toArray();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Unable to fetch products', error });
    }
  } else if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('next-app');
      const result = await db.collection('products').insertOne(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Unable to add product', error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

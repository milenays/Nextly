import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('next-app');
      const product = await db.collection('products').findOne({ _id: new ObjectId(id as string) });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Unable to fetch product', error });
    }
  } else if (req.method === 'PUT') {
    try {
      const client = await clientPromise;
      const db = client.db('next-app');
      const result = await db.collection('products').updateOne(
        { _id: new ObjectId(id as string) },
        { $set: req.body }
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Unable to update product', error });
    }
  } else if (req.method === 'DELETE') {
    try {
      const client = await clientPromise;
      const db = client.db('next-app');
      const result = await db.collection('products').deleteOne({ _id: new ObjectId(id as string) });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Unable to delete product', error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

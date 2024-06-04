import clientPromise from './mongodb';

export async function getSuppliers() {
  const client = await clientPromise;
  const db = client.db('next-app');
  const suppliers = await db.collection('suppliers').find({}).toArray();
  return suppliers;
}

export async function addSupplier(supplier) {
  const client = await clientPromise;
  const db = client.db('next-app');
  const result = await db.collection('suppliers').insertOne(supplier);
  return result;
}

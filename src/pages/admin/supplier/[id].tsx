import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Table } from 'shadcn';

export default function SupplierDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [supplier, setSupplier] = useState(null);

  useEffect(() => {
    if (id) {
      // Tedarikçiyi API'den veya yerel depolamadan çekme işlemi
      const fetchedSupplier = { id, name: 'Supplier 1', products: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }] };
      setSupplier(fetchedSupplier);
    }
  }, [id]);

  if (!supplier) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{supplier.name}</h1>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
            {supplier.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

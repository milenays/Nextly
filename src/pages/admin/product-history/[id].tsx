import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Table } from 'shadcn';

export default function ProductHistory() {
  const router = useRouter();
  const { id } = router.query;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (id) {
      // Ürün tarihçesini API'den veya yerel depolamadan çekme işlemi
      const fetchedHistory = [
        { date: '2024-06-01', action: 'Stock Added', quantity: 100, price: 150 },
        { date: '2024-06-02', action: 'Price Updated', quantity: 100, price: 120 },
      ];
      setHistory(fetchedHistory);
    }
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Product History</h1>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Action</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.action}</td>
                <td>{entry.quantity}</td>
                <td>${entry.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

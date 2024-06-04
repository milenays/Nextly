import { useState } from 'react';
import { Input, Table } from 'shadcn';

export default function SearchProducts() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // API'den veya yerel depolamadan ürün arama işlemi
    const searchedProducts = [
      { id: 1, name: 'Product 1', stockCode: 'P001', barcode: '1234567890123', price: 100 },
      { id: 2, name: 'Product 2', stockCode: 'P002', barcode: '1234567890124', price: 200 },
    ].filter(product => 
      product.name.includes(query) || 
      product.stockCode.includes(query) || 
      product.barcode.includes(query)
    );
    setProducts(searchedProducts);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Search Products</h1>
        <Input 
          type="text" 
          value={query} 
          onChange={handleSearch} 
          placeholder="Search by name, stock code or barcode" 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
        />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Stock Code</th>
              <th>Barcode</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.stockCode}</td>
                <td>{product.barcode}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

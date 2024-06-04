import { useState } from 'react';
import { Button, Checkbox } from 'shadcn';

export default function BulkActions() {
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [action, setAction] = useState('');

  const handleAction = () => {
    // Toplu işlem gerçekleştirme
    console.log(`Performing ${action} on selected suppliers:`, selectedSuppliers);
    // Burada API çağrıları yaparak toplu işlemleri gerçekleştirin
  };

  const toggleSupplierSelection = (supplierId) => {
    setSelectedSuppliers(prevState => 
      prevState.includes(supplierId)
        ? prevState.filter(id => id !== supplierId)
        : [...prevState, supplierId]
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Bulk Actions</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="action">
            Select Action
          </label>
          <select 
            id="action" 
            value={action} 
            onChange={(e) => setAction(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select an action</option>
            <option value="enableSales">Enable Sales</option>
            <option value="disableSales">Disable Sales</option>
            <option value="updateStock">Update Stock</option>
            <option value="updatePrice">Update Price</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Suppliers
          </label>
          <div className="shadow border rounded w-full p-4">
            {/* Bu kısımda dinamik olarak tedarikçileri listeleyin */}
            {[
              { id: 1, name: 'Supplier 1' },
              { id: 2, name: 'Supplier 2' },
              // Diğer tedarikçiler
            ].map(supplier => (
              <div key={supplier.id} className="flex items-center mb-2">
                <Checkbox 
                  checked={selectedSuppliers.includes(supplier.id)} 
                  onChange={() => toggleSupplierSelection(supplier.id)}
                />
                <span className="ml-2">{supplier.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button 
            onClick={handleAction} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={!action || selectedSuppliers.length === 0}
          >
            Perform Action
          </Button>
        </div>
      </div>
    </div>
  );
}

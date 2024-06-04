import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from 'shadcn';

export default function AddVariantProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = data => {
    // Varyant ürün ekleme işlemi burada yapılacak
    setMessage('Variant product added successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add Variant Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Name
            </label>
            <Input 
              name="productName" 
              {...register('productName', { required: true })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
            {errors.productName && <p className="text-red-500 text-xs italic">Product name is required.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stockCode">
              Stock Code
            </label>
            <Input 
              name="stockCode" 
              {...register('stockCode', { required: true })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
            {errors.stockCode && <p className="text-red-500 text-xs italic">Stock code is required.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="barcode">
              Barcode
            </label>
            <Input 
              name="barcode" 
              {...register('barcode', { required: true })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
            {errors.barcode && <p className="text-red-500 text-xs italic">Barcode is required.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <Input 
              name="price" 
              type="number" 
              step="0.01" 
              {...register('price', { required: true })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
            {errors.price && <p className="text-red-500 text-xs italic">Price is required.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
              Stock
            </label>
            <Input 
              name="stock" 
              type="number" 
              {...register('stock', { required: true })} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
            {errors.stock && <p className="text-red-500 text-xs italic">Stock is required.</p>}
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Variant Product
            </Button>
          </div>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}

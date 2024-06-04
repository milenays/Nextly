import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from 'shadcn';

export default function EditVariantProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (id) {
      // Varyant ürünü API'den veya yerel depolamadan çekme işlemi
      const fetchedProduct = { id, name: 'Variant Product 1', stockCode: 'VP001', barcode: '1234567890123', price: 100, stock: 50 };
      setValue('productName', fetchedProduct.name);
      setValue('stockCode', fetchedProduct.stockCode);
      setValue('barcode', fetchedProduct.barcode);
      setValue('price', fetchedProduct.price);
      setValue('stock', fetchedProduct.stock);
    }
  }, [id, setValue]);

  const onSubmit = data => {
    // Varyant ürün güncelleme işlemi burada yapılacak
    setMessage('Variant product updated successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Edit Variant Product</h1>
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
              Update Variant Product
            </Button>
          </div>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}

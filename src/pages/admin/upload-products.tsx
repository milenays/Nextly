import { useState } from 'react';
import * as XLSX from 'xlsx';
import { Button } from 'shadcn';

export default function UploadProducts() {
  const [message, setMessage] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const products = XLSX.utils.sheet_to_json(worksheet);
      
      // Ürünleri API'ye veya yerel depolamaya gönderme işlemi
      console.log(products);
      setMessage('Products uploaded successfully!');
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Upload Products</h1>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="mb-4" />
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Textarea, Button } from 'shadcn';

export default function SupplierNotes() {
  const router = useRouter();
  const { id } = router.query;
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (id) {
      // Tedarikçi notlarını API'den veya yerel depolamadan çekme işlemi
      const fetchedNotes = 'Sample note for supplier 1';
      setNotes(fetchedNotes);
    }
  }, [id]);

  const handleSave = () => {
    // Notları kaydetme işlemi burada yapılacak
    console.log(`Saving notes for supplier ${id}:`, notes);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Supplier Notes</h1>
        <Textarea 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <div className="flex items-center justify-between">
          <Button 
            onClick={handleSave} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Notes
          </Button>
        </div>
      </div>
    </div>
  );
}

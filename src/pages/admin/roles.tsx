import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Select } from 'shadcn';

export default function Roles() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = data => {
    // Burada rol tanımlama işlemi yapılacak
    setMessage('Role updated successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Assign Roles</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
              User Email
            </label>
            <Select name="userEmail" {...register('userEmail', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {/* Kullanıcı emaillerinin dinamik olarak eklenmesi */}
              <option value="user@example.com">user@example.com</option>
            </Select>
            {errors.userEmail && <p className="text-red-500 text-xs italic">User email is required.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <Select name="role" {...register('role', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="admin">Admin</option>
              <option value="warehouse">Warehouse</option>
              <option value="accounting">Accounting</option>
            </Select>
            {errors.role && <p className="text-red-500 text-xs italic">Role is required.</p>}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Assign Role
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: 'Products', path: '/admin/products' },
    { name: 'Suppliers', path: '/admin/suppliers' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className={`mb-4 ${router.pathname === item.path ? 'bg-gray-700' : ''}`}>
            <Link href={item.path} legacyBehavior>
              <a className="block px-4 py-2 rounded">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

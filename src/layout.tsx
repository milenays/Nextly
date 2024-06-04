import React from 'react';
import Sidebar from '@/components/ui/sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

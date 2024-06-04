import React, { useState } from 'react';
import Drawer from '@/components/ui/drawer';
import AddSupplier from './add-supplier';
import EditSupplier from './edit-supplier/[id]';

const SuppliersPage = ({ initialSuppliers }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);

  const openDrawer = (content) => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setDrawerContent(null);
  };

  const deleteSupplier = async (id) => {
    try {
      const res = await fetch(`/api/suppliers/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setSuppliers(suppliers.filter(supplier => supplier._id !== id));
      } else {
        console.error('Failed to delete supplier');
      }
    } catch (error) {
      console.error('Failed to delete supplier', error);
    }
  };

  return (
    <div>
      <button onClick={() => openDrawer(<AddSupplier onClose={closeDrawer} />)}>Add Supplier</button>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} title="Add Supplier">
        {drawerContent}
      </Drawer>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {initialSuppliers.map(supplier => (
            <tr key={supplier._id}>
              <td>{supplier.supplierName}</td>
              <td>
                <a onClick={() => openDrawer(<EditSupplier id={supplier._id} onClose={closeDrawer} />)}>Edit</a>
                <button onClick={() => deleteSupplier(supplier._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/suppliers');
  const suppliers = await res.json();
  return {
    props: {
      initialSuppliers: suppliers,
    },
  };
}

export default SuppliersPage;

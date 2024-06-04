import React, { useState } from 'react';
import Drawer from '@/components/ui/drawer';
import AddProduct from './add-product';
import EditProduct from './edit-product/[id]';

const ProductsPage = ({ initialProducts }) => {
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

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setProducts(products.filter(product => product._id !== id));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  return (
    <div>
      <button onClick={() => openDrawer(<AddProduct onClose={closeDrawer} />)}>Add Product</button>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} title="Add Product">
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
          {initialProducts.map(product => (
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>
                <a onClick={() => openDrawer(<EditProduct id={product._id} onClose={closeDrawer} />)}>Edit</a>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();
  return {
    props: {
      initialProducts: products,
    },
  };
}

export default ProductsPage;

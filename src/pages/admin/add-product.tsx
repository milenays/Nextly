import React from 'react';

const AddProduct = ({ onClose }) => {
  return (
    <div>
      <h2>Add Product</h2>
      {/* Form ve diğer UI elemanları */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddProduct;

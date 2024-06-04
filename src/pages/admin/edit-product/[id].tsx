import React from 'react';

const EditProduct = ({ id, onClose }) => {
  return (
    <div>
      <h2>Edit Product</h2>
      {/* Form ve diğer UI elemanları */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditProduct;

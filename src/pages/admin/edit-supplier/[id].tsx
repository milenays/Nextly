import React from 'react';

const EditSupplier = ({ id, onClose }) => {
  return (
    <div>
      <h2>Edit Supplier</h2>
      {/* Form ve diğer UI elemanları */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditSupplier;

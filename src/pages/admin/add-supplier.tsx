import React from 'react';

const AddSupplier = ({ onClose }) => {
  return (
    <div>
      <h2>Add Supplier</h2>
      {/* Form ve diğer UI elemanları */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddSupplier;

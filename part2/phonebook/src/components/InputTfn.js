import React from 'react';

const InputTfn = ({ value, onChange }) => {
  return (
    <>
      Teléfono: <input value={value} onChange={onChange} />
    </>
  );
};

export default InputTfn;

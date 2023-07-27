import React from 'react';

const InputName = ({ value, onChange }) => {
  return (
    <>
      Nome: <input value={value} onChange={onChange} />
    </>
  );
};

export default InputName;

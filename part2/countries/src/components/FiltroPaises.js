import React, { useState } from 'react';

const FiltroPaises = ({ onFilterChange }) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    const text = event.target.value;
    setFilterText(text);
    onFilterChange(text);
  };
  return (
    <>
      <input
        type="text"
        value={filterText}
        onChange={handleFilterChange}
        placeholder="Nome do país..."
      ></input>
    </>
  );
};

export default FiltroPaises;

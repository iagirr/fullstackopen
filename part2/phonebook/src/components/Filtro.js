import React from 'react';

const Filtro = ({ onFilterChange }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <>
      Filtro de búsqueda: <input onChange={handleInputChange} />
    </>
  );
};

export default Filtro;

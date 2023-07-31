import React from 'react';

const ShowButton = ({ country, onSelectCountry }) => {
  const handleShowCountryClick = () => {
    onSelectCountry(country.name.common);
  };

  return <button onClick={handleShowCountryClick}>Mostra</button>;
};

export default ShowButton;

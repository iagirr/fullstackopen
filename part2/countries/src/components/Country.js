import React from 'react';

const Country = ({ country }) => {
  return (
    <div>
      <h3>{country.name.common}</h3>
      <img src={country.flags.png} alt={country.name.common} />
      <p>Idiomas: {Object.values(country.languages).join(', ')}</p>
    </div>
  );
};

export default Country;

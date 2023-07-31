import React from 'react';
import ShowButton from './ShowButton';

const CountriesList = ({ countries, onSelectCountry }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3}>
          {country.name.common}{' '}
          <ShowButton country={country} onSelectCountry={onSelectCountry} />
        </div>
      ))}
    </div>
  );
};

export default CountriesList;

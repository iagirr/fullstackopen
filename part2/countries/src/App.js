import axios from 'axios';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import FiltroPaises from './components/FiltroPaises';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
      setFilteredCountries(res.data);
    });
  }, []);

  const handleFilterChange2 = (text) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <>
      <h2>Qué país estás buscando?</h2>
      <FiltroPaises onFilterChange={handleFilterChange2} />

      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <>
          {filteredCountries.length > 10 && (
            <p>Por favor, sen máis específico na túa busca.</p>
          )}
          <h2>Countries</h2>
          <CountriesList countries={filteredCountries} />
        </>
      )}
    </>
  );
};

export default App;

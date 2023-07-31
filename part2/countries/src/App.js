import axios from 'axios';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import FiltroPaises from './components/FiltroPaises';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

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
    setSelectedCountry(null);
  };

  const handleShowCountry = (countryName) => {
    console.log(`País: ${countryName}`);
    const selected = countries.find(
      (country) => country.name.common === countryName
    );
    setSelectedCountry(selected);
  };

  return (
    <>
      <h2>Qué país estás buscando?</h2>
      <FiltroPaises onFilterChange={handleFilterChange2} />

      {selectedCountry ? (
        <Country country={selectedCountry} />
      ) : (
        <>
          {filteredCountries.length === 1 && (
            <Country country={filteredCountries[0]} />
          )}

          {filteredCountries.length > 1 && (
            <>
              {filteredCountries.length > 10 && (
                <p>Por favor, sé más específico en tu búsqueda.</p>
              )}
              <h2>Countries</h2>
              <CountriesList
                countries={filteredCountries}
                onSelectCountry={handleShowCountry}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;

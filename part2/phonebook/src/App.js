import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InputName from './components/InputName';
import InputTfn from './components/InputTfn';
import Listin from './components/Listín';
import Filtro from './components/Filtro';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Iago Sánchez', tfn: '637050182' },
  ]);
  const [newName, setNewName] = useState('');
  const [newTfn, setNewTfn] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promesa cumprida');
      setPersons(response.data);
    });
  }, []);

  const handleInputName = (event) => {
    setNewName(event.target.value);
  };

  const handleInputTfn = (event) => {
    setNewTfn(event.target.value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (newName.trim() === '' || newTfn.trim() === '') {
      window.alert('Por favor, ningún campo debe de quedar baleiro');
      return;
    }

    const isDuplicate = persons.some(
      (person) => person.name === newName || person.tfn === newTfn
    );
    if (isDuplicate) {
      window.alert(
        `Síntoo, ${newName} co teléfono ${newTfn} xa está no listín`
      );
      return;
    }

    console.log('Botón clicado', event.target);
    const newPerson = { name: newName, tfn: newTfn };
    setPersons([...persons, newPerson]);
    setNewName('');
    setNewTfn('');
  };

  const filterPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Libriño telefónico</h2>
      <Filtro onFilterChange={handleFilterChange} />
      <h2>Engada novas persoas ao listín</h2>
      <form onSubmit={addPerson}>
        <div>
          <InputName value={newName} onChange={handleInputName} />
          <InputTfn value={newTfn} onChange={handleInputTfn} />
        </div>
        <div>
          <button type="submit">Engadir</button>
        </div>
      </form>
      <h2>Listín</h2>
      <Listin persons={filterPersons} />
    </>
  );
};

export default App;

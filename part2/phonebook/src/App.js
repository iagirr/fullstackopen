import React, { useEffect, useState } from 'react';
import InputName from './components/InputName';
import InputTfn from './components/InputTfn';
import Listin from './components/Listín';
import Filtro from './components/Filtro';
import SuccessNot from './components/SuccessNot';
import ErrorNot from './components/ErrorNot';
import api from './components/api';
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Iago Sánchez', tfn: '637050182' },
  ]);
  const [newName, setNewName] = useState('');
  const [newTfn, setNewTfn] = useState('');
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    api
      .getAllPersons()
      .then((data) => {
        console.log('promesa satisfeita');
        setPersons(data);
      })
      .catch((err) => {
        console.log(`Erro ao obter persoas: ${err}`);
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
      (person) => person.name === newName && person.tfn === newTfn
    );
    if (isDuplicate) {
      window.alert(
        `Síntoo, ${newName} co teléfono ${newTfn} xa está no listín`
      );
      setErrorMessage('Inténtao de novo con outra combinación de nome-número')
      return;
    }

    const newPerson = { name: newName, tfn: newTfn };

    api
      .addPerson(newPerson)
      .then((addedPerson) => {
        console.log(
          `Engadido ${addedPerson.name} co número ${addedPerson.tfn}`
        );
        setPersons([...persons, addedPerson]);
        setNewName('');
        setNewTfn('');
        setSuccessMessage(`Engadido ${addedPerson.name} co número ${addedPerson.tfn}`);
        setTimeout(() => {
          setSuccessMessage('')
        }, 4000)
      })
      .catch((err) => {
        console.log(`Erro ao engadir á persoa: ${err.message}`);
      });
  };

  const deletePerson = (id) => {
    const confirmDelete = window.confirm(
      'Estás seguro de que queres eliminar este contacto?'
    );

    if (confirmDelete) {
      api
        .deletePerson(id)
        .then(() => {
          console.log(`Persoa con ID ${id} eliminada`);
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((err) => console.log(err));
    }
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
      <Listin persons={filterPersons} onDelete={deletePerson} />
      <SuccessNot message={successMessage}/>
      <ErrorNot message={errorMessage}/>
    </>
  );
};

export default App;

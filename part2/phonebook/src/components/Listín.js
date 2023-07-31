import React from 'react';

const Listin = ({ persons, onDelete }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.tfn}
          <button onClick={() => onDelete(person.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default Listin;

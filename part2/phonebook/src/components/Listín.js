import React from 'react';

const Listin = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} {person.tfn}
        </li>
      ))}
    </ul>
  );
};

export default Listin;

const express = require('express');
const app = express();
let persons = require('./phonebook');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Ola mundo!</h2>');
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post('/api/persons', (req, res) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'Falta nome ou número' });
  }

  const existingPerson = persons.find((person) => person.name === body.name);
  if (existingPerson) {
    res.status(409).json({ error: 'Este nome xa existe' });
  }

  const newID = () => {
    const maxID =
      persons.length > 0 ? Math.max(...persons.map((person) => person.id)) : 0;
    return maxID + 1;
  };

  const newPerson = {
    id: newID(),
    name: body.name,
    number: body.number,
  };

  console.log(newPerson);
  persons.push(newPerson);
  res.json(newPerson);
});

app.get('/api/info', (req, res) => {
  const dataActual = new Date().toString();
  const entradas = persons.length;
  const mensaxeEntradas = `<p>O listín telefónico conta cun total de ${entradas} entradas</p><p>${dataActual}</p>`;
  res.send(mensaxeEntradas);
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor correndo no porto ${PORT}`);
});

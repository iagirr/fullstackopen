import axios from 'axios';
const BASE_URL = 'http://localhost:3001/persons';

const getAllPersons = () => {
  return axios.get(BASE_URL).then((response) => response.data);
};

const addPerson = (newPerson) => {
  return axios.post(BASE_URL, newPerson).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export default {
  getAllPersons: getAllPersons,
  addPerson: addPerson,
  deletePerson: deletePerson,
};

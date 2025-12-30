import { http } from "./http";

const BASE = "/persons";

export async function getAllPersons() {
  const res = await http.get(BASE);
  return res.data;
}

export async function getPersonById(id) {
  const res = await http.get(`${BASE}/${id}`);
  return res.data;
}

export async function searchByName(name) {
  const res = await http.get(`${BASE}/search`, { params: { name } });
  return res.data;
}

export async function createPerson(person) {
  const res = await http.post(BASE, person);
  return res.data;
}

export async function updatePerson(id, person) {
  const res = await http.put(`${BASE}/${id}`, person);
  return res.data;
}

export async function deletePerson(id) {
  await http.delete(`${BASE}/${id}`);
}

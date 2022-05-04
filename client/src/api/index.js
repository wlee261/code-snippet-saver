import axios from 'axios';

const url = 'http://localhost:5000/snippets';

export const createSnippet = (newSnippet) => axios.post(url, newSnippet);
export const fetchSnippets = () => axios.get(url);
export const updateSnippet = (id, updatedSnippet) => axios.patch(`${url}/${id}`, updatedSnippet);
export const deleteSnippet = (id) => axios.delete(`${url}/${id}`);
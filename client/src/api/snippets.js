import axios from "axios";

const url = "https://code-snippet-saver-api.onrender.com/snippets";

export const createSnippet = (newSnippet) => axios.post(url, newSnippet);
export const fetchSnippets = () => axios.get(url);
export const updateSnippet = (id, updatedSnippet) =>
  axios.patch(`${url}/updateSnippet/${id}`, updatedSnippet);
export const deleteSnippet = (id) => axios.delete(`${url}/${id}`);
export const deleteFolderFromSnippets = (folderName) =>
  axios.patch(`${url}/deleteFolderFromSnippets/${folderName}`);

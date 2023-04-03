import axios from "axios";

const url = "https://code-snippet-saver-api.onrender.com/folders";

export const createFolder = (newFolder) => axios.post(url, newFolder);
export const fetchFolders = () => axios.get(url);
export const updateFolder = (id, updatedFolder) =>
  axios.patch(`${url}/${id}`, updatedFolder);
export const deleteFolder = (id) => axios.delete(`${url}/${id}`);

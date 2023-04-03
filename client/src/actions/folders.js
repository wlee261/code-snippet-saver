import * as api from "../api/folders";

export const createFolder = (folder) => async (dispatch) => {
  try {
    const { data } = await api.createFolder(folder);
    dispatch({ type: "folders/CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getFolders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFolders();

    dispatch({ type: "folders/FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFolder = (id, folder) => async (dispatch) => {
  try {
    const { data } = await api.updateFolder(id, folder);

    dispatch({ type: "folders/UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFolder = (id) => async (dispatch) => {
  try {
    await api.deleteFolder(id);

    dispatch({ type: "folders/DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

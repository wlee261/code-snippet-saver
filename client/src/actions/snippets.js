import { CREATE, FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api';

export const createSnippet = (snippet) => async (dispatch) => {
    try {
        const { data } = await api.createSnippet(snippet);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getSnippets = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSnippets();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateSnippet = (id, snippet) => async (dispatch) => {
    try {
        const { data } = await api.updateSnippet(id, snippet);

        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteSnippet = (id) => async (dispatch) => {
    try {
        await api.deleteSnippet(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
}
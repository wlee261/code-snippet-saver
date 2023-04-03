import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";

export default (snippets = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...snippets, action.payload];
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return snippets.map((snippet) =>
        snippet._id === action.payload._id ? action.payload : snippet
      );
    case DELETE:
      return snippets.filter((snippet) => snippet._id !== action.payload);
    case "DELETEFOLDER":
      return action.payload;
    default:
      return snippets;
  }
};

import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";
import { sortSnippets } from "../utils/sortFunctions";

export default (snippets = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...snippets, action.payload].sort(sortSnippets);
    case FETCH_ALL:
      return action.payload.sort(sortSnippets);
    case UPDATE:
      return snippets
        .map((snippet) =>
          snippet._id === action.payload._id ? action.payload : snippet
        )
        .sort(sortSnippets);
    case DELETE:
      return snippets.filter((snippet) => snippet._id !== action.payload);
    case "DELETEFOLDER":
      return action.payload.sort(sortSnippets);
    default:
      return snippets.sort(sortSnippets);
  }
};

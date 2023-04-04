import { sortFolders } from "../utils/sortFunctions";

export default (folders = [], action) => {
  switch (action.type) {
    case "folders/CREATE":
      return [...folders, action.payload].sort(sortFolders);
    case "folders/FETCH_ALL":
      return action.payload.sort(sortFolders);
    case "folders/UPDATE":
      return folders
        .map((folder) =>
          folder._id === action.payload ? action.payload : folder
        )
        .sort(sortFolders);
    case "folders/DELETE":
      return folders
        .filter((folder) => folder._id !== action.payload)
        .sort(sortFolders);
    default:
      return folders.sort(sortFolders);
  }
};

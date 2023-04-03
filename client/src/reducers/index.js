import { combineReducers } from "redux";

import snippets from "./snippets";
import folders from "./folders";
import currDisplaying from "./currDisplaying";

export const allReducers = combineReducers({
  snippets: snippets,
  folders: folders,
  currDisplaying: currDisplaying,
});

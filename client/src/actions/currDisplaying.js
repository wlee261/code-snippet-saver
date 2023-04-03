export const setFolderToDisplay = (folderName) => {
  return { type: "currDisplaying/setFolderToDisplay", payload: folderName };
};

export const setSnippetToDisplay = (snippetId) => {
  return { type: "currDisplaying/setSnippetToDisplay", payload: snippetId };
};

export const showCreateNewSnippet = () => {
  return { type: "currDisplaying/showCreateNewSnippet" };
};

export const hideCreateNewSnippet = () => {
  return { type: "currDisplaying/hideCreateNewSnippet" };
};

export const setEditSnippetFalse = () => {
  return { type: "currDisplaying/setEditSnippetFalse" };
};

export const setEditSnippetTrue = () => {
  return { type: "currDisplaying/setEditSnippetTrue" };
};

export const toggleHideDrawers = () => {
  return { type: "currDisplaying/toggleHideDrawers" };
};

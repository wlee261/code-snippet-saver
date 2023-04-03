export default (
  currDisplaying = {
    snippetId: "",
    folderName: "All Snippets",
    showCreateNewSnippet: false,
    editingSnippet: false,
    hideDrawers: true,
  },
  action
) => {
  switch (action.type) {
    case "currDisplaying/setSnippetToDisplay":
      return { ...currDisplaying, snippetId: action.payload };
    case "currDisplaying/setFolderToDisplay":
      return { ...currDisplaying, folderName: action.payload };
    case "currDisplaying/showCreateNewSnippet":
      return { ...currDisplaying, showCreateNewSnippet: true };
    case "currDisplaying/hideCreateNewSnippet":
      return { ...currDisplaying, showCreateNewSnippet: false };
    case "currDisplaying/setEditSnippetTrue":
      return { ...currDisplaying, editingSnippet: true };
    case "currDisplaying/setEditSnippetFalse":
      return { ...currDisplaying, editingSnippet: false };
    case "currDisplaying/toggleHideDrawers":
      return { ...currDisplaying, hideDrawers: !currDisplaying.hideDrawers };
    default:
      return currDisplaying;
  }
};

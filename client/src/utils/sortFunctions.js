export function sortFolders(a, b) {
  if (a.folderName.toLowerCase() < b.folderName.toLowerCase()) {
    return -1;
  } else if (a.folderName.toLowerCase() > b.folderName.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

export function sortSnippets(a, b) {
  if (a.description.toLowerCase() < b.description.toLowerCase()) {
    return -1;
  } else if (a.description.toLowerCase() > b.description.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

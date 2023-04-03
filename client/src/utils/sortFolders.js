export default function sortFolders(a, b) {
  if (a.folderName.toLowerCase() < b.folderName.toLowerCase()) {
    return -1;
  } else if (a.folderName.toLowerCase() > b.folderName.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

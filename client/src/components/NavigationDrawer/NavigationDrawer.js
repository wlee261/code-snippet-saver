import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./NavigationDrawer.css";

// import MyListItemButton from "../MyMuiComponents/MyListItemButton";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  ListItemButton,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

import { createFolder } from "../../actions/folders";
import {
  setFolderToDisplay,
  showCreateNewSnippet,
} from "../../actions/currDisplaying";

export const NavigationDrawer = () => {
  const folders = useSelector((state) => {
    return state.folders;
  });

  const folderToDisplay = useSelector(
    (state) => state.currDisplaying.folderName
  );

  const hideDrawers = useSelector((state) => state.currDisplaying.hideDrawers);

  const dispatch = useDispatch();

  const [addingNewFolder, setAddingNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const handleAddFolderClick = () => {
    setAddingNewFolder(true);
  };

  const handleSave = () => {
    var dontSave = false;
    folders.forEach((folder) => {
      if (folder.folderName === newFolderName) {
        alert("This folder already exists, please choose another name");
        dontSave = true;
      }
    });
    if (newFolderName !== "" && !dontSave) {
      setAddingNewFolder(false);
      dispatch(createFolder({ folderName: newFolderName }));
      setNewFolderName("");
    }
  };

  const handleFolderNameInputChange = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      handleSave();
    }
  };

  return (
    <Drawer
      className="navigation-drawer"
      PaperProps={{
        sx: {
          width: 310,
          position: "fixed",
          "@media (max-width: 900px)": {
            visibility: hideDrawers ? "hidden" : "",
            height: hideDrawers ? 0 : "",
            width: hideDrawers ? 0 : "",
            overflow: hideDrawers ? "hidden" : "",
          },
        },
      }}
      anchor="left"
      variant="permanent"
    >
      <div className="navigation-drawer__new-snippet-group">
        <p>Snippet Saver</p>
        <Button
          variant="outlined"
          onClick={() => dispatch(showCreateNewSnippet())}
        >
          Create New Snippet
        </Button>
      </div>
      <Divider />
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={folderToDisplay === "All Snippets"}
              onClick={() => {
                dispatch(setFolderToDisplay("All Snippets"));
              }}
            >
              <ListItemText primary="All Snippets" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            {addingNewFolder ? (
              <>
                <input
                  autoFocus
                  value={newFolderName}
                  onChange={handleFolderNameInputChange}
                  onKeyDown={handleEnterPress}
                />
                <IconButton
                  onClick={() => {
                    setAddingNewFolder(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <IconButton onClick={handleSave}>
                  <SaveIcon />
                </IconButton>
              </>
            ) : (
              <>
                <ListItemText primary="FOLDERS" />
                <IconButton onClick={handleAddFolderClick}>
                  <AddIcon />
                </IconButton>
              </>
            )}
          </ListItem>
          {folders.map((folder) => {
            return (
              <ListItem key={folder._id} disablePadding>
                <ListItemButton
                  selected={folderToDisplay.folderName === folder.folderName}
                  onClick={() => {
                    dispatch(setFolderToDisplay(folder));
                  }}
                >
                  <ListItemText primary={folder.folderName} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

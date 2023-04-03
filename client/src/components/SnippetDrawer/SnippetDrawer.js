import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SnippetDrawer.css";

import SearchIcon from "@mui/icons-material/Search";
import {
  Divider,
  Drawer,
  InputAdornment,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";

import {
  setFolderToDisplay,
  setSnippetToDisplay,
} from "../../actions/currDisplaying";
import { deleteFolder } from "../../actions/folders";
import { deleteFolderFromSnippets } from "../../actions/snippets";

const SnippetDrawer = () => {
  const [filterQuery, setFilterQuery] = useState("");

  const dispatch = useDispatch();
  const snippets = useSelector((state) => state.snippets);
  const snippetToDisplayId = useSelector(
    (state) => state.currDisplaying.snippetId
  );

  const folderToDisplay = useSelector(
    (state) => state.currDisplaying.folderName
  );

  const getSnippetsToDisplay = () => {
    if (folderToDisplay === "All Snippets") {
      if (filterQuery !== "") {
        return snippets.filter((snippet) => {
          return snippet.description
            .toLowerCase()
            .includes(filterQuery.toLowerCase());
        });
      } else {
        return snippets;
      }
    } else if (filterQuery !== "") {
      return snippets.filter((snippet) => {
        return (
          snippet.description
            .toLowerCase()
            .includes(filterQuery.toLowerCase()) &&
          snippet.folder === folderToDisplay.folderName
        );
      });
    } else {
      return snippets.filter((snippet) => {
        return snippet.folder === folderToDisplay.folderName;
      });
    }
  };

  const handleFolderDeleteClick = () => {
    dispatch(deleteFolder(folderToDisplay._id));
    dispatch(deleteFolderFromSnippets(folderToDisplay.folderName));
    dispatch(setFolderToDisplay("All Snippets"));
  };

  return (
    <Drawer
      className="snippet-drawer"
      PaperProps={{
        sx: {
          left: 310,
          width: 310,
          position: "fixed",
          "@media (max-width: 900px)": {
            visibility: "hidden",
            left: 0,
            height: 0,
            width: 0,
            overflow: "hidden",
          },
        },
      }}
      anchor="left"
      variant="permanent"
    >
      <List>
        <ListItem>
          <ListItemText
            primary={
              folderToDisplay === "All Snippets"
                ? "All Snippets"
                : folderToDisplay.folderName
            }
          />
          {folderToDisplay === "All Snippets" ? (
            <></>
          ) : (
            <IconButton onClick={handleFolderDeleteClick}>
              <FolderDeleteIcon />
            </IconButton>
          )}
        </ListItem>
        <ListItem>
          <TextField
            className="snippet-drawer__search-textfield"
            value={filterQuery}
            onChange={(e) => {
              setFilterQuery(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </ListItem>
        <Divider />

        {getSnippetsToDisplay().map((snippet) => {
          return (
            <ListItem key={snippet._id} disablePadding>
              <ListItemButton
                value={snippet._id}
                onClick={() => dispatch(setSnippetToDisplay(snippet._id))}
                selected={snippet._id === snippetToDisplayId}
              >
                <ListItemText primary={snippet.description} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SnippetDrawer;

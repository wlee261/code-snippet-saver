import React from "react";
import "./Snippet.css";

import { AppBar, Chip, IconButton, Toolbar, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";

import { CopyBlock, dracula } from "react-code-blocks";
import { useDispatch, useSelector } from "react-redux";
import { deleteSnippet } from "../../actions/snippets";
import {
  setEditSnippetTrue,
  setSnippetToDisplay,
  showCreateNewSnippet,
} from "../../actions/currDisplaying";

const Snippet = () => {
  const dispatch = useDispatch();
  const currSnippetId = useSelector((state) => state.currDisplaying.snippetId);

  const snippets = useSelector((state) => state.snippets);
  const currSnippet =
    currSnippetId === ""
      ? ""
      : snippets.find((snippet) => snippet._id === currSnippetId);

  return (
    <>
      {currSnippet === "" ? (
        <div className="welcome-message">
          <h2>Welcome</h2>
          <h2>Select a Snippet to View or Create a New One</h2>
        </div>
      ) : (
        <div className="snippet-container">
          <AppBar
            position="static"
            sx={{ backgroundColor: `#FFEBCD`, color: "black" }}
          >
            <Toolbar>
              <IconButton>
                <MenuIcon
                  sx={{
                    "@media (min-width: 900px)": {
                      visibility: "hidden",
                      height: 0,
                      width: 0,
                      overflow: "hidden",
                    },
                  }}
                />
              </IconButton>
              <Typography>{currSnippet.description}</Typography>
              <Chip label={currSnippet.language} sx={{ marginLeft: `10px` }} />
              <IconButton
                sx={{ marginLeft: "auto" }}
                onClick={() => {
                  dispatch(showCreateNewSnippet());
                  dispatch(setEditSnippetTrue());
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  dispatch(deleteSnippet(currSnippet._id));
                  dispatch(setSnippetToDisplay(""));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className="snippet__code-block">
            <CopyBlock
              text={currSnippet.code}
              language={currSnippet.language}
              codeblock
              theme={dracula}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Snippet;

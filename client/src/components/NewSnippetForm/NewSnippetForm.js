import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSnippet, updateSnippet } from "../../actions/snippets";
import { popularLanguages } from "../../utils/languages";
import {
  TextField,
  FormControl,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import "./NewSnippetForm.css";
import {
  clearSnippetToEdit,
  hideCreateNewSnippet,
  setEditSnippetFalse,
  setSnippetToDisplay,
} from "../../actions/currDisplaying";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const NewSnippetForm = ({ populateForm }) => {
  const dispatch = useDispatch();

  const [snippetData, setSnippetData] = useState({
    description: "",
    language: "Text",
    code: "",
    tags: "",
    folder: "None",
  });

  const folders = useSelector((state) => state.folders);
  const currSnippetId = useSelector((state) => state.currDisplaying.snippetId);
  const currSnippet = useSelector((state) =>
    state.snippets.find((snippet) => snippet._id === currSnippetId)
  );
  const editing = useSelector((state) => state.currDisplaying.editingSnippet);

  useEffect(() => {
    if (editing) {
      setSnippetData(currSnippet);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (snippetData.code === "" || snippetData.description === "") {
      alert("Please provide a value for the code");
    } else if (editing) {
      dispatch(updateSnippet(currSnippet._id, snippetData));
      dispatch(hideCreateNewSnippet());
      dispatch(setEditSnippetFalse());
      setSnippetData({
        description: "",
        language: "Text",
        code: "",
        tags: "",
        folder: "None",
      });
    } else {
      dispatch(createSnippet(snippetData));
      dispatch(hideCreateNewSnippet());
      setSnippetData({
        description: "",
        language: "Text",
        code: "",
        tags: "",
        folder: "None",
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form
        className="new-snippet-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h2>New Snippet</h2>

        <TextField
          className="input__description"
          label="description"
          sx={{ m: 3, width: `90%` }}
          value={snippetData.description}
          onChange={(e) => {
            setSnippetData({ ...snippetData, description: e.target.value });
          }}
        />

        <TextField
          label="code"
          multiline
          rows={6}
          sx={{ m: 3, width: `90%` }}
          value={snippetData.code}
          onChange={(e) => {
            setSnippetData({ ...snippetData, code: e.target.value });
          }}
        />
        <div className="new-snippet-form__group-language-folder">
          <FormControl sx={{ width: `43%` }}>
            <InputLabel id="folder-select-label">Folder</InputLabel>
            <Select
              labelId="folder-select-label"
              id="folder-select"
              label="Folder"
              value={snippetData.folder}
              onChange={(e) => {
                setSnippetData({ ...snippetData, folder: e.target.value });
              }}
              MenuProps={MenuProps}
            >
              <MenuItem value="None">None</MenuItem>
              {folders.map((folder) => {
                return (
                  <MenuItem key={folder.folderName} value={folder.folderName}>
                    {folder.folderName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ width: `43%` }}>
            {/* TODO:This and folder-select can be remade into a reusable component */}
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              label="Language"
              value={snippetData.language}
              onChange={(e) => {
                setSnippetData({ ...snippetData, language: e.target.value });
              }}
              MenuProps={MenuProps}
            >
              {popularLanguages.map((language) => {
                return (
                  <MenuItem key={language} value={language}>
                    {language}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="new-snippet-form__button-group">
          <Button type="submit" variant="outlined">
            {editing ? "Save" : "Create"}
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(hideCreateNewSnippet());
              dispatch(setEditSnippetFalse());
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default NewSnippetForm;

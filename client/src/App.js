import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { getSnippets } from "./actions/snippets";
import { getFolders } from "./actions/folders";

import { Box } from "@mui/material";

import SnippetDrawer from "./components/SnippetDrawer/SnippetDrawer";
import { NavigationDrawer } from "./components/NavigationDrawer/NavigationDrawer";
import NewSnippetForm from "./components/NewSnippetForm/NewSnippetForm";
import Snippet from "./components/Snippet/Snippet";

const App = () => {
  const dispatch = useDispatch();

  const shouldShowCreateNewSnippet = useSelector(
    (state) => state.currDisplaying.showCreateNewSnippet
  );

  const [currentID, setCurrentID] = useState(null);

  useEffect(() => {
    dispatch(getSnippets());
    dispatch(getFolders());
  }, [currentID, dispatch]);

  return (
    <Box sx={{ display: "flex", height: `100%` }}>
      <NavigationDrawer />
      <SnippetDrawer />
      {shouldShowCreateNewSnippet ? <NewSnippetForm /> : <Snippet />}
    </Box>
  );
};

export default App;

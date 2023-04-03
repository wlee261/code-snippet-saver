import React from "react";
import { ListItemButton } from "@mui/material";

const MyListItemButton = (props) => {
  return (
    <ListItemButton
      selected={props.selected}
      sx={{
        "&.Mui-selected": {
          backgroundColor: "gray",
          color: "white",
        },
      }}
    >
      {props.children}
    </ListItemButton>
  );
};

export default MyListItemButton;

import React from "react";
import { styled } from "@mui/material/styles";

const Drawer_Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerHeader = ({ children }) => {
  return <Drawer_Header>{children}</Drawer_Header>;
};

export default DrawerHeader;

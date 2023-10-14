import React from "react";
import DashBoard from "./DashBoard";
import { Box, Container } from "@mui/material";
import SideNav from "../../components/side-nav/SideNav";

const Index = () => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav drawerWidth={drawerWidth} />
      <DashBoard drawerWidth={drawerWidth} />
    </Box>
  );
};

export default Index;

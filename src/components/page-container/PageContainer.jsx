import { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const drawerWidth = 240;
import { styled, useTheme } from "@mui/material/styles";
import DrawerHeader from "../drawer-header/DrawerHeader";
import Main from "../main/Main";
import { Outlet, useNavigate } from "react-router-dom";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#773705",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SideNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const largeScreen = useMediaQuery("(min-width:768px)");

  const navigations = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon />, link: "/dashboard" },
    { text: "Expenses", icon: <PaymentOutlinedIcon />, link: "/expenses" },
    { text: "Budget", icon: <LocalAtmOutlinedIcon />, link: "/budgets" },
    { text: "Categories", icon: <CategoryOutlinedIcon />, link: "/categories" },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  useEffect(() => {
    if (largeScreen) {
      setOpenSidebar(true);
      return;
    }
    setOpenSidebar(false);
  }, [largeScreen]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={openSidebar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleSidebar}
            edge="start"
            sx={{ mr: 2, ...(openSidebar && { display: "none" }) }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Expense Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className="side-bar"
        open={openSidebar}
        variant="persistent"
        disablePortal
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleToggleSidebar}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Toolbar variant="regular" sx={{ backgroundColor: "white" }}>
          <MenuList>
            {navigations?.map((navigation) => (
              <MenuItem
                key={navigation.text}
                onClick={() => navigate(navigation.link)}
              >
                <ListItemIcon>{navigation.icon}</ListItemIcon>
                <ListItemText>{navigation.text}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Toolbar>
      </Drawer>
      <Main open={openSidebar} drawerwidth={drawerWidth}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};

SideNav.propTypes = {
  drawerWidth: PropTypes.number,
};

export default SideNav;

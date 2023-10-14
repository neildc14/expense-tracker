import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const DrawerHeader_ = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const DrawerHeader = ({ children }) => {
  return <DrawerHeader_>{children}</DrawerHeader_>;
};

DrawerHeader.propTypes = {
  children: PropTypes.any,
};

export default DrawerHeader;
